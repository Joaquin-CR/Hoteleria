import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{

  llamarReservaccion: boolean = true;
  llamarConfig: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  activarReservaciones()
  {
    this.llamarReservaccion = true;
    this.llamarConfig = false
  }

  activarConfiguraciones()
  {
    this.llamarConfig = true;
    this.llamarReservaccion = false;
  }

}
