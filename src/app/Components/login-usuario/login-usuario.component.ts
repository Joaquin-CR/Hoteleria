import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  login: FormGroup;
  submitted = false;
  loading = false;
  userName: string;
  contra: string;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private _usuarioService: UsuariosService) 
{ 
  this.login = this.fb.group({
    User: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    checkTerminons: ['', Validators.required]
  });

  this.userName = "";
  this.contra = "";
}

  ngOnInit(): void {
  }

  usuarioLogin()
  {
    this.loading = true;
    this.submitted = true;
    this.userName = this.login.value.User;
    this.contra = this.login.value.Password;
    this._usuarioService.getLiga("usuariosLogin");
    this._usuarioService.getUsuario(this.userName).subscribe(data =>{
      if(Object.keys(data).length == 0)
      {
        this.toastr.warning('No se encontró registro del usuario', 'ADVERTENCIA',
        {
          positionClass: 'toast-bottom-right'
        });
      }
      else
      {
        
        var usuario = Object.values(data);
        let user = usuario[0]['id_user'];
        let pass = usuario[0]['password_user'];
        if(pass == this.contra)
        {
          this._usuarioService.usuarioLogeado(true);
          // Se genera la cookie
          // this._cookies.setToken(this._cookies.getRandomToken(16), this._cookies.nuevaExpiracion(1));
          this.toastr.success('Acceso concedido', 'Acción exitosa',
          {
            positionClass: 'toast-bottom-right'
          });
          // Se redirecciona de nuevo a la landing
          this.router.navigate(['/usuarios']);
        }
        else
        {
          this.toastr.error('El usuario o la contraseña son incorrectas', 'Error',
          {
            positionClass: 'toast-bottom-right'
          });
        } 
      }
    });
  }

}
