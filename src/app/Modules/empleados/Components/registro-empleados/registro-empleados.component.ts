import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent implements OnInit 
{

  registroEmpleado: FormGroup;
  submitted = false;
  loading = false;

  id!: number;
  puesto!: string;
  nombre!: string;
  apellido!: string;
  correo!: string;
  contrasena!: string;
  confirm_contrasena!: string;

  @Input() llamarNewEmpl!: boolean;
  constructor(private fb: FormBuilder,
              private router: Router) 
  { 
    this.registroEmpleado = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      LastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      ID: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      Cargo: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      Mail: ['', Validators.email],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ConfirmPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
  }

  ngOnInit(): void 
  {
    this.id = this.random();
    this.mostrarDatos(); 
  }

  nuevoEpmleado()
  {
    this.loading = true;
    
    //
    this.loading = false;
    this.id = this.random();
    this.mostrarDatos(); 
  }

  random() 
  {
    return Math.floor((Math.random() * (2000000 - 1000000 + 1)) + 1000000);
  }

  mostrarDatos()
  {
    this.registroEmpleado.setValue({
      ID: this.id,
    });
  }

}
