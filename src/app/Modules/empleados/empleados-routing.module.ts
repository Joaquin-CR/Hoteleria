import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEmpleadosComponent } from './Components/gestion-empleados/gestion-empleados.component';
import { EmpleadosComponent } from './empleados.component';

const routes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'gestion-empleados', component: GestionEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
