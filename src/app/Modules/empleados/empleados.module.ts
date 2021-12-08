import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { SupervisorComponent } from './Components/supervisor/supervisor.component';
import { GestionEmpleadosComponent } from './Components/gestion-empleados/gestion-empleados.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
    SupervisorComponent,
    GestionEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
