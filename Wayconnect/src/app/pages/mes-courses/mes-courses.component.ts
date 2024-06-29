import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.services';

@Component({
  selector: 'app-mes-courses',
  templateUrl: './mes-courses.component.html',
  styleUrls: ['./mes-courses.component.scss']
})
export class MesCoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    const userEmail = this.authService.getUserEmail();
    if (!userEmail) {
      console.error('Email utilisateur non trouvé.');
      return;
    }else{
      console.log('l\'email est:', userEmail)
    }

    this.authService.getMesCoursesByEmail(userEmail)
      .subscribe(
        courses => {
          this.courses = courses;
          console.log('Courses:', courses);
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors du chargement des courses:', error);
        }
      );
  }
}
