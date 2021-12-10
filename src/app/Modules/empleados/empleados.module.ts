import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { SupervisorComponent } from './Components/supervisor/supervisor.component';
import { GestionEmpleadosComponent } from './Components/gestion-empleados/gestion-empleados.component';
import { MenuEmpleadoComponent } from './Components/menu-empleado/menu-empleado.component';
import { RegistroEmpleadosComponent } from './Components/registro-empleados/registro-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpleadosComponent,
    SupervisorComponent,
    GestionEmpleadosComponent,
    MenuEmpleadoComponent,
    RegistroEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
