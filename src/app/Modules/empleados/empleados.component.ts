import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/cookies.service';
import { EmpleadosService } from 'src/app/Services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  llamarReservacion: boolean = true;
  llamarNuevoEmpleado: boolean = false;
  llamarGestionEmpleado: boolean = false;

  btnRes: boolean = false;
  btnNewEmpleado: boolean = true;
  btnGestionEmpleado: boolean = true;

  constructor(private router: Router,
              private _cookies: CookiesService,
              private _empleadoService: EmpleadosService) 
  { 
    // 
  }

  ngOnInit(): void {
  }

  activarReservaciones()
  {
    this.llamarReservacion = true;
    this.llamarNuevoEmpleado = false;
    this.llamarGestionEmpleado = false;

    this.btnGestionEmpleado = true;
    this.btnRes = false;
    this.btnNewEmpleado = true;
  }

  activarGestionEmpleados()
  {
    this.llamarGestionEmpleado = true;
    this.llamarNuevoEmpleado = false;
    this.llamarReservacion = false;

    this.btnGestionEmpleado = false;
    this.btnRes = true;
    this.btnNewEmpleado = true;
  }

  activarNuevoEmpleado()
  {
    this.llamarGestionEmpleado = false;
    this.llamarNuevoEmpleado = true;
    this.llamarReservacion = false;

    this.btnGestionEmpleado = true;
    this.btnRes = true;
    this.btnNewEmpleado = false;
  }

  logout()
  {
    this._cookies.Logout();
    this._empleadoService.loginEmpleado;
    // this.router.navigate(['/landing']);
  }

}
