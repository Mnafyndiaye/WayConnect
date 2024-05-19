import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ProfilConducteurComponent } from './profil-conducteur/profil-conducteur.component';
import { ProfilPassagerComponent } from './profil-passager/profil-passager.component';
import { EnregistrerCourseComponent } from './enregistrer-course/enregistrer-course.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ProfilConducteurComponent,
    ProfilPassagerComponent,
    EnregistrerCourseComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
