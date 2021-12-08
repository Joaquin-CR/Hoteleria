import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent implements OnInit {

  loginE: FormGroup;
  submitted = false;
  loading = false;
  us: string;
  pass: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              //private _empSession: EmpleadosesionService,
              private toastr: ToastrService) 
  { 
    this.loginE = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]]
    });

    this.us = "Joaquin";
    this.pass = "1234";
  }

  ngOnInit(): void {
  }

  empleadoLogin()
  {
    let formusu = this.loginE.value.User;
    let formpass = this.loginE.value.Password;
    if(formusu == this.us && formpass == this.pass)
    {
      this.toastr.success('Acceso concedido', 'Acción exitosa',
      {
        positionClass: 'toast-bottom-right'
      });
      //Se genera la cookie
      //this._cookies.setToken(this._cookies.getRandomToken(16), this._cookies.nuevaExpiracion(1));
      //this._empSession.loginEmpleado();
      this.router.navigate(['/empleados']);
    }
    else
    {
      this.toastr.error('Acceso denegado', 'ERROR',
      {
        positionClass: 'toast-bottom-right'
      });
      // console.log("Acceso denegado");
    }
  }

}
