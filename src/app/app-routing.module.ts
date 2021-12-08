import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
