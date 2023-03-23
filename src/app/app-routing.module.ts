import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch : 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'verficar-correo', component: VerificarCorreoComponent},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: '**', redirectTo: 'login', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
