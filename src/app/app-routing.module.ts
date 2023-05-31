import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
  { path: 'patients', component: PatientsComponent, data: {title: 'Patients'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
