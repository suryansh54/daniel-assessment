import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: '**',
    redirectTo: 'register',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
