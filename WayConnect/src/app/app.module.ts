import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnregistrerCourseComponent } from './enregistrer-course/enregistrer-course.component';
import { PieceIdentiteComponent } from './piece-identite/piece-identite.component';
import { ContacterPassagerComponent } from './contacter-passager/contacter-passager.component';
import { GererReservationComponent } from './gerer-reservation/gerer-reservation.component';
import { LoginComponent } from './login/login.component';
import { MesCoursesComponent } from './mes-courses/mes-courses.component';
import { ListeDesPassagersComponent } from './liste-des-passagers/liste-des-passagers.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    EnregistrerCourseComponent,
    PieceIdentiteComponent,
    ContacterPassagerComponent,
    GererReservationComponent,
    LoginComponent,
    MesCoursesComponent,
    ListeDesPassagersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
