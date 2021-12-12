import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{

  llamarReservaccion: boolean = true;
  llamarNuevaRes: boolean = false;
  llamarConfig: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  activarReservaciones()
  {
    this.llamarReservaccion = true;
    this.llamarNuevaRes = false;
    this.llamarConfig = false;
  }

  activarConfiguraciones()
  {
    this.llamarConfig = true;
    this.llamarNuevaRes = false;
    this.llamarReservaccion = false;
  }

  activarNuevaRes()
  {
    this.llamarConfig = false;
    this.llamarNuevaRes = true;
    this.llamarReservaccion = false;
  }

}
