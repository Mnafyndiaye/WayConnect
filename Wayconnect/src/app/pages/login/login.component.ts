import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, Login } from '../../service/auth.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: Login;

  constructor(private authService: AuthService, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log('Login Object:', this.loginObj);  // Ajoutez cette ligne pour vérifier les données

    this.authService.onLogin(this.loginObj).subscribe((res: any) => {
      try {
        if (res.result) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userRole', res.data.role);
          localStorage.setItem('userFullName', res.data.fullName);
          localStorage.setItem('email', res.data.email);



          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie!',
            text: 'Ravie de vous revoir.',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigateByUrl('/home');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vérifiez les champs et réessayez',
          })
        }
      } catch (error) {
        console.error('Login Error:', error);  // Ajoutez cette ligne pour plus de détails sur l'erreur

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur s\'est produite. Veuillez réessayer plus tard',
        })
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Une erreur s\'est produite. Veuillez réessayer plus tard',
      })
    });
  }
}
