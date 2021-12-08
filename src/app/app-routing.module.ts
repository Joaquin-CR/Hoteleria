import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginEmpleadoComponent } from './Components/login-empleado/login-empleado.component';
import { LoginUsuarioComponent } from './Components/login-usuario/login-usuario.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent,
    children: [
      {
        path: 'empleados',
        loadChildren: () => import('./Modules/empleados/empleados.module').then(mod => mod.EmpleadosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./Modules/usuarios/usuarios.module').then(mod => mod.UsuariosModule)
      }
    ]
  },
  {
    path: '', 
    redirectTo: 'landingpage', 
    pathMatch:'full'
  }, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {
    path: 'landingpage', 
    component: LandingPageComponent
  },
  {
    path: 'login', 
    component: LoginUsuarioComponent
  },
  {
    path: 'acceso-empleado', 
    component: LoginEmpleadoComponent
  },
  {
    path:'**', 
    redirectTo: 'landingpage', 
    pathMatch: 'full'
  } //Si se ingresa un complemento de liga erroneo esta redirecciona a la indicada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
