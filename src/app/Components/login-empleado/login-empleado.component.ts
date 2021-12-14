import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/Services/empleados.service';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent implements OnInit {

  loginE: FormGroup;
  submitted = false;
  loading = false;
  us!: string;
  password!: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _empleadoService: EmpleadosService,
              private toastr: ToastrService) 
  { 
    this.loginE = this.fb.group({
      User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]]
    });
  }

  ngOnInit(): void {
  }

  empleadoLogin()
  {
    this.loading = true;
    this.submitted = true;
    this.us = this.loginE.value.User;
    this.password = this.loginE.value.Password;

    this._empleadoService.getempleado(this.us).subscribe(data =>{
      if(Object.keys(data).length == 0)
      {
        this.toastr.warning('No se encontró registro del empleado', 'ADVERTENCIA',
        {
          positionClass: 'toast-bottom-right'
        });
      }
      else
      {
        
        var empleado = Object.values(data);
      //   let idEmpleado = usuario[0]['id_user'];
        let pass = empleado[0]['password_empleado'];
        if(pass == this.password)
        {
      //     this._usuarioService.setIdUser(idUser);
      //     // Se genera la cookie
      //     // this._cookies.setToken(this._cookies.getRandomToken(16), this._cookies.nuevaExpiracion(1));
          this.toastr.success('Acceso concedido', 'Acción exitosa',
          {
            positionClass: 'toast-bottom-right'
          });
          // Se redirecciona a la página del empleado
          this.router.navigate(['/empleados']);
        }
        else
        {
          this.toastr.error('El ID o la contraseña son incorrectas', 'Error',
          {
            positionClass: 'toast-bottom-right'
          });
        } 
      }
    });
    // if(formusu == this.us && formpass == this.pass)
    // {
    //   this.toastr.success('Acceso concedido', 'Acción exitosa',
    //   {
    //     positionClass: 'toast-bottom-right'
    //   });
    //   //Se genera la cookie
    //   //this._cookies.setToken(this._cookies.getRandomToken(16), this._cookies.nuevaExpiracion(1));
    //   //this._empSession.loginEmpleado();
    //   this.router.navigate(['/empleados']);
    // }
    // else
    // {
    //   this.toastr.error('Acceso denegado', 'ERROR',
    //   {
    //     positionClass: 'toast-bottom-right'
    //   });
    //   // console.log("Acceso denegado");
    // }
  }

}
