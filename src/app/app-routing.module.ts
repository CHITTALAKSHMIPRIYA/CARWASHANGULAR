import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

import { CarDetailsComponent } from './car-details/car-details.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},

{ path: 'login', component: LoginComponent},
{path: 'about' , component: AboutComponent},
{ path: 'addDetails', component: CarDetailsComponent},
{ path: 'register', component: RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
