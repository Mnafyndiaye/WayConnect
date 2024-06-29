import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.services';
import Swal from 'sweetalert2';

type JoursSemaine = {
  lundi: boolean;
  mardi: boolean;
  mercredi: boolean;
  jeudi: boolean;
  vendredi: boolean;
  samedi: boolean;
  dimanche: boolean;
};

@Component({
  selector: 'app-enregistrer-course',
  templateUrl: './enregistrer-course.component.html',
  styleUrls: ['./enregistrer-course.component.scss']
})
export class EnregistrerCourseComponent {
  jours_semaine = [
    { name: 'Lundi', controlName: 'lundi' },
    { name: 'Mardi', controlName: 'mardi' },
    { name: 'Mercredi', controlName: 'mercredi' },
    { name: 'Jeudi', controlName: 'jeudi' },
    { name: 'Vendredi', controlName: 'vendredi' },
    { name: 'Samedi', controlName: 'samedi' },
    { name: 'Dimanche', controlName: 'dimanche' },
  ];

  formGroup: FormGroup;
  prisma: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.formGroup = this.formBuilder.group({
      depart: ['', Validators.required],
      arrivee: ['', Validators.required],
      heureDepart: ['', Validators.required],
      dateDepart: ['', Validators.required],
      siegesDispo: ['', Validators.required],
      jours: this.formBuilder.array(this.jours_semaine.map(() => this.formBuilder.control(false)))
    });
  }

  get joursFormArray(): FormArray {
    return this.formGroup.get('jours') as FormArray;
  }

  createEnregistrerCourse(): void {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;
      const dateDepart = formValue.dateDepart;
      const heureDepart = formValue.heureDepart;
      const dateTimeDepart = new Date(`${dateDepart}T${heureDepart}:00`).toISOString();

      const joursSelectionnes: Partial<JoursSemaine> = {};

      this.jours_semaine.forEach((jour, index) => {
        joursSelectionnes[jour.controlName as keyof JoursSemaine] = formValue.jours[index];
      });

      const payload = { 
        ...formValue, 
        dateDepart: dateTimeDepart,  
        heureDepart: dateTimeDepart,
        ...joursSelectionnes,
        userEmail: this.authService.getUserEmail() // Récupérer l'e-mail de l'utilisateur connecté

      };

      this.authService.createEnregistrerCourse(payload).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Course enregistrée',
            text: 'Votre course a été enregistrée avec succès.'
          });
          this.clearForm();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de l\'enregistrement de votre course. Veuillez réessayer plus tard.'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Formulaire invalide',
        text: 'Veuillez remplir correctement tous les champs du formulaire.'
      });
    }
  }
  // async getCoursesByDriver(driverId: number) {
  //   return this.prisma.enregistrerCourse.findMany({
  //     where: {
  //       id: driverId,
  //     },
  //   });
  // }

  clearForm() {
    this.formGroup.reset();
  }
}
