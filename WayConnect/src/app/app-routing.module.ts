import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { EnregistrerCourseComponent } from './pages/enregistrer-course/enregistrer-course.component';
import { PieceIdentiteComponent } from './pages/piece-identite/piece-identite.component';
import { MesCoursesComponent } from './pages/mes-courses/mes-courses.component';
import { ListeDesPassagersComponent } from './pages/liste-des-passagers/liste-des-passagers.component';
import { ContacterPassagerComponent } from './pages/contacter-passager/contacter-passager.component';
import { GererReservationComponent } from './pages/gerer-reservation/gerer-reservation.component';
import { RechercherCourseComponent } from './pages/rechercher-course/rechercher-course.component';
import { AvisComponent } from './pages/avis/avis.component';
import { MesInfosComponent } from './pages/mes-infos/mes-infos.component';
import { ContacterConducteurComponent } from './pages/contacter-conducteur/contacter-conducteur.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'enregistrer-course', component: EnregistrerCourseComponent, canActivate: [AuthGuard]},
  {path: 'piece-identite', component: PieceIdentiteComponent, canActivate: [AuthGuard]},
  {path: 'contacter-passager', component: ContacterPassagerComponent, canActivate: [AuthGuard]},
  {path: 'gerer-reservation', component: GererReservationComponent, canActivate: [AuthGuard]},
  {path: 'liste-des-passagers', component: ListeDesPassagersComponent, canActivate: [AuthGuard]},
  {path: 'mes-courses', component: MesCoursesComponent, canActivate: [AuthGuard]},
  {path: 'rechercher-course', component: RechercherCourseComponent, canActivate: [AuthGuard]},
  {path: 'avis', component: AvisComponent, canActivate: [AuthGuard]},
  {path: 'mes-infos', component: MesInfosComponent, canActivate: [AuthGuard]},
  {path: 'contacter-conducteur', component: ContacterConducteurComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
