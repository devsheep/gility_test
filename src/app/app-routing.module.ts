import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPazienteComponent } from './components/paziente/edit-paziente/edit-paziente.component';
import { EmptyPazienteComponent } from './components/paziente/empty-paziente/empty-paziente.component';
import { PazienteDetailComponent } from './components/paziente/paziente-detail/paziente-detail.component';
import { PazienteComponent } from './components/paziente/paziente.component';
import { VisitaComponent } from './components/visita/visita.component';

const routes: Routes = [
  { path: '', redirectTo: '/pazienti', pathMatch: 'full' },
  { path: 'pazienti', component: PazienteComponent, children: [
    { path: '', component: EmptyPazienteComponent },
    { path: 'new', component: EditPazienteComponent },
    { path: ':id', component: PazienteDetailComponent },
    { path: ':id/edit', component: EditPazienteComponent },

  ] },
  { path: 'visite', component: VisitaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
