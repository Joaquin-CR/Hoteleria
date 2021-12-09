import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MenuUsuarioComponent } from './Components/menu-usuario/menu-usuario.component';
import { ReservacionesComponent } from './Components/reservaciones/reservaciones.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    MenuUsuarioComponent,
    ReservacionesComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
