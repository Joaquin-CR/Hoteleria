import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MenuUsuarioComponent } from './Components/menu-usuario/menu-usuario.component';
import { ReservacionesComponent } from './Components/reservaciones/reservaciones.component';
import { GestionUsuarioComponent } from './Components/gestion-usuario/gestion-usuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    MenuUsuarioComponent,
    ReservacionesComponent,
    GestionUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
