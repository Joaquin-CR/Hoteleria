import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MenuUsuarioComponent } from './Components/menu-usuario/menu-usuario.component';
import { ReservacionesComponent } from './Components/reservaciones/reservaciones.component';
import { GestionUsuarioComponent } from './Components/gestion-usuario/gestion-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaResComponent } from './Components/nueva-res/nueva-res.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    MenuUsuarioComponent,
    ReservacionesComponent,
    GestionUsuarioComponent,
    NuevaResComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
