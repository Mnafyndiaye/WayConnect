import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Importez CommonModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './service/custom.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContacterPassagerComponent } from './pages/contacter-passager/contacter-passager.component';
import { EnregistrerCourseComponent } from './pages/enregistrer-course/enregistrer-course.component';
import { ListeDesPassagersComponent } from './pages/liste-des-passagers/liste-des-passagers.component';
import { MesCoursesComponent } from './pages/mes-courses/mes-courses.component';
import { PieceIdentiteComponent } from './pages/piece-identite/piece-identite.component';
import { GererReservationComponent } from './pages/gerer-reservation/gerer-reservation.component';
import { ConducteurComponent } from './pages/conducteur/conducteur.component';
import { AvisComponent } from './pages/avis/avis.component';
import { RechercherCourseComponent } from './pages/rechercher-course/rechercher-course.component';
import { MesInfosComponent } from './pages/mes-infos/mes-infos.component';
import { ContacterConducteurComponent } from './pages/contacter-conducteur/contacter-conducteur.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    ContacterPassagerComponent,
    EnregistrerCourseComponent,
    ListeDesPassagersComponent,
    MesCoursesComponent,
    PieceIdentiteComponent,
    GererReservationComponent,
    ConducteurComponent,
    AvisComponent,
    RechercherCourseComponent,
    MesInfosComponent,
    ContacterConducteurComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
