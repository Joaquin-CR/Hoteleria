import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario, UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  registroUsuario: FormGroup;
  submitted = false;
  loading = false;

  userName: string;
  phone: string;
  contrasena: string;
  confirm_contrasena: string;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuariosService) 
  {
    this.registroUsuario = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      LastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      UserName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Mail: ['', Validators.email],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ConfirmPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Lada: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });

    this.userName = "";
    this.contrasena = "";
    this.confirm_contrasena = "";
    this.phone = "";
  }

  ngOnInit(): void 
  {
    // 
  }

  nuevoRegistro()
  {
    this.contrasena = this.registroUsuario.value.Password;
    this.confirm_contrasena = this.registroUsuario.value.ConfirmPass;
    if(this.contrasena == this.confirm_contrasena)
    {
      this.userName = this.registroUsuario.value.UserName;
      // SE HACE LA CONSULTA AL SERVIDOR
      this._usuarioService.getUsuario(this.userName).subscribe(res =>{
        /* EL NOMBRE DE USUARIO DEBE DE SER UNICO, ASÍ QUE SI NO ENCUENTRA UNO EXISTENTE ENTRA DEL LADO 
           VERDADERO DEL IF*/
        if(Object.keys(res).length == 0)
        {
          this.phone = ""+this.registroUsuario.value.Lada + this.registroUsuario.value.Phone
          const nuevoUser: Usuario = 
          {
            nomUser: this.registroUsuario.value.Name,
            apellUser: this.registroUsuario.value.LastName,
            userN: this.userName,
            mail: this.registroUsuario.value.Mail,
            pass: this.contrasena,
            cell: this.phone
          }
          // SE REGISTRA EL NUEVO USUARIO EN LA BASE DE DATOS
          this._usuarioService.addUsuario(nuevoUser).subscribe();
          this.toastr.success('El registro se realizó de manera exitosa', 'ACCION EXITOSA',
          {
            positionClass: 'toast-bottom-right'
          });
          this.router.navigate(['/login']);
        }
        else
        {
          this.toastr.warning('El nombre de usuario ya está ocupado, favor de ingresar otro', 'ADVERTENCIA',
          {
            positionClass: 'toast-bottom-right'
          });
        }
      });
    }
    else
    {
      this.toastr.warning('Las contraseñas no coinciden', 'ADVERTENCIA',
      {
        positionClass: 'toast-bottom-right'
      });
    }
  }

}
