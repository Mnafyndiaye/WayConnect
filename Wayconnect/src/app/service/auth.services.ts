import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:5000";
  private userEmail: string; // Ajout d'une propriété pour stocker l'e-mail

  constructor(private http: HttpClient) {
    this.userEmail = localStorage.getItem('email') || '';

  }
  getUserEmail(): string {
    return this.userEmail;
  } 
  setUserEmail(email: string): void {
    this.userEmail = email;
    localStorage.setItem('email', email); // Stockage de l'email dans localStorage
  }
  // Fonction pour se connecter
  onLogin(obj: any): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/login`, obj);
  }

  createEnregistrerCourse(payload: any): Observable<any> {
    return this.http.post(`${this.baseURL}/enregistrer-course`, payload);
  }

  createPieceIdentite(obj: any): Observable<any> {
    return this.http.post(`${this.baseURL}/piece-identite`, obj);
  }

  createContacterPassager(obj: any): Observable<any> {
    return this.http.post(`${this.baseURL}/contacter-passager`, obj);
  }

  createGererReservation(obj: any): Observable<any> {
    return this.http.post(`${this.baseURL}/gerer-reservation`, obj);
  }

  getListeDesPassagers(): Observable<any> {
    return this.http.get(`${this.baseURL}/liste-des-passagers`);
  }

  getMesCourses(): Observable<any> {
    return this.http.get(`${this.baseURL}/mes-courses`);
  }

  getMesCoursesByEmail(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.get(`${this.baseURL}/mes-courses`, { params });
  }

  // rechercherCourses(formData: any): Observable<any> {
  //   // Extraction des valeurs du formulaire
  //   const { depart, arrivee, heureDepart, dateDepart } = formData;

  //   // Construction du payload
  //   const payload = {
  //     depart,
  //     arrivee,
  //     heureDepart,
  //     dateDepart
  //   };

  //   return this.http.post(`${this.baseURL}/rechercher-courses`, payload);
  // }

  rechercherCourses(formData: any): Observable<any> {
    return this.http.post(`${this.baseURL}/rechercher-courses`, formData);
  }
}

export class Login {
  email: string;
  password: string;
  originType: string;
  constructor() {
    this.email = '';
    this.password = '';
    this.originType = "roles";
  }
}
