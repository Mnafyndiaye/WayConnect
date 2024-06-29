import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avis-form',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent {
  avis = {
    rating: null,
    comment: '',
    userId: null
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('/api/avis', this.avis)
      .subscribe(response => {
        console.log('Avis ajouté avec succès !', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après la soumission
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'avis :', error);
        // Gérer les erreurs de soumission
      });
  }
}
