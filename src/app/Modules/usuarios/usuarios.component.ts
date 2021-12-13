import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{

  llamarReservaccion: boolean = true;
  llamarNuevaRes: boolean = false;
  llamarConfig: boolean = false;

  btnMiRes: boolean = false;
  btnNewRes: boolean = true;
  btnConfig: boolean = true;
  constructor(private router: Router,) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    // 
  }

  activarReservaciones()
  {
    this.llamarReservaccion = true;
    this.llamarNuevaRes = false;
    this.llamarConfig = false;

    this.btnConfig = true;
    this.btnMiRes = false;
    this.btnNewRes = true;
  }

  activarConfiguraciones()
  {
    this.llamarConfig = true;
    this.llamarNuevaRes = false;
    this.llamarReservaccion = false;

    this.btnConfig = false;
    this.btnMiRes = true;
    this.btnNewRes = true;
  }

  activarNuevaRes()
  {
    this.llamarConfig = false;
    this.llamarNuevaRes = true;
    this.llamarReservaccion = false;

    this.btnConfig = true;
    this.btnMiRes = true;
    this.btnNewRes = false;
  }

  logout()
  {
    this.router.navigate(['/landing']);
  }

}
