import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPrefFormComponent } from './components/car-pref-form/car-pref-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CarPrefFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
