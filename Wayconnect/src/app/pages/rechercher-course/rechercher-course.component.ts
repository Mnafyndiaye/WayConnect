import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.services';

@Component({
  selector: 'app-rechercher-course',
  templateUrl: './rechercher-course.component.html',
  styleUrls: ['./rechercher-course.component.scss']
})
export class RechercherCourseComponent implements OnInit {
  formGroup: FormGroup;
  coursesDisponibles: any[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formGroup = this.fb.group({
      depart: ['', Validators.required],
      arrivee: ['', Validators.required],
      heureDepart: [''],
      dateDepart: ['']
    });
  }

  ngOnInit(): void {
    // Initialisation
  }

  rechercherCourses(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      this.authService.rechercherCourses(formData).subscribe(
        (response: any[]) => {
          this.coursesDisponibles = response;
          console.log('Courses disponibles:', this.coursesDisponibles);
          // Gérer la réponse, par exemple, afficher dans l'interface utilisateur
        },
        (error) => {
          console.error('Erreur lors de la recherche de courses:', error);
          // Gérer les erreurs
        }
      );
    } else {
      console.log('Formulaire invalide');
      // Afficher un message d'erreur si nécessaire
    }
  }

  clearForm(): void {
    this.formGroup.reset();
    this.coursesDisponibles = []; // Vider les courses affichées
  }

}
