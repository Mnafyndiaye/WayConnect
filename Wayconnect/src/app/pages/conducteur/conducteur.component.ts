import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.scss']
})
export class ConducteurComponent {

  jours_semaine = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.formGroup = this.formBuilder.group({
      depart: ['', Validators.required],
      arrivee: ['', Validators.required],
      heureDepart: ['', Validators.required],
      dateDepart: ['', Validators.required],
      siegesDispo: ['', Validators.required],
      lundi: [false],
      mardi: [false],
      mercredi: [false],
      jeudi: [false],
      vendredi: [false],
      samedi: [false],
      dimanche: [false],
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.authService.createEnregistrerCourse(this.formGroup.value).subscribe(
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

  clearForm() {
    this.formGroup.reset();
  }

}
