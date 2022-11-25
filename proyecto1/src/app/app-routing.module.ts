import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages-routing.module';




const routes: Routes = [
  {   path: '', redirectTo: '/dashboard', pathMatch:'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  }, 
  //rutas protegidas
  
];
//routermodule.forRoot :especifica las rutas principales
@NgModule({
  declarations: [],
  imports:[
   CommonModule,
   RouterModule,
 
   //PagesRoutingModule,
  RouterModule.forRoot(routes),],
  
  exports: [RouterModule],
})
export class AppRoutingModule { }
