import { MesCoursesComponent } from './mes-courses/mes-courses.component';
import { ListeDesPassagersComponent } from './liste-des-passagers/liste-des-passagers.component';
import { GererReservationComponent } from './gerer-reservation/gerer-reservation.component';
import { ContacterPassagerComponent } from './contacter-passager/contacter-passager.component';
import { PieceIdentiteComponent } from './piece-identite/piece-identite.component';
import { EnregistrerCourseComponent } from './enregistrer-course/enregistrer-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'enregistrer-course', component: EnregistrerCourseComponent},
  {path: 'piece-identite', component: PieceIdentiteComponent},
  {path: 'contacter-passager', component: ContacterPassagerComponent},
  {path: 'gerer-reservation', component: GererReservationComponent},
  {path: 'liste-des-passagers', component: ListeDesPassagersComponent},
  {path: 'mes-courses', component: MesCoursesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
