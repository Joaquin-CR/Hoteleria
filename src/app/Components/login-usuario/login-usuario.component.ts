import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  login: FormGroup;
  submitted = false;
  loading = false;
  usuario: string;
  contra: string;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,) 
{ 
  this.login = this.fb.group({
    User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    checkTerminons: ['', Validators.required]
  });

  this.usuario = "Joaquin13";
  this.contra = "1234";
}

  ngOnInit(): void {
  }

  usuarioLogin()
  {
    this.loading = true;
    this.submitted = true;
    let formusu = this.login.value.User;
    let formpass = this.login.value.Password;
    if(formusu == this.usuario && formpass == this.contra)
    {
      // Se genera la cookie
      // this._cookies.setToken(this._cookies.getRandomToken(16), this._cookies.nuevaExpiracion(1));

      this.toastr.success('Acceso concedido', 'Acción exitosa',
      {
        positionClass: 'toast-bottom-right'
      });
      // Se redirecciona de nuevo a la landing
      //this.router.navigate(['/landingpage']);
    }
  }

}
