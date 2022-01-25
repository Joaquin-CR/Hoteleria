import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateUser, UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {

  modificarUsuario: FormGroup;
  modificarContra: FormGroup;
  editar = false;
  newPass = false;

  idUser!: number;
  nombre!: string;
  apellido!: string;
  nombreUser!: string;
  newUserN!: string;
  correo!: string;
  lada!: string;
  phone!: string;
  telefono!: string;

  @Input() llamarConfigUser!: boolean;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _usuarioService: UsuariosService) 
  { 
    this.modificarUsuario = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      LastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      UserName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Mail: ['', Validators.email],
      Lada: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    this.modificarContra = this.fb.group({
      OldPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ConfirmPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
    // this.llamarConfigUser = true;
  }

  ngOnInit(): void 
  {
    this.setIdUser();
    this.setUserName();
  }


  setUserName()
  {
    this.nombreUser = this._usuarioService.getUserName();
  }

  setIdUser()
  {
    this.idUser = this._usuarioService.getIdUsuario();
  }

  getInfUser()
  {
    this._usuarioService.getLiga("usuarios");
  }

  activarUpdate()
  {
    this.editar = true;
    this.getInfUser();
    this.mostrarDatos();
  }

  cambiarPass()
  {
    this.newPass = true;
  }

  cancelarUpdate()
  {
    this.editar = false;
    this.newPass = false;
  }

  verificarUpdate()
  {

    this._usuarioService.getUsuario(this.nombreUser).subscribe(res =>{
      /* EL NOMBRE DE USUARIO DEBE DE SER UNICO, ASÍ QUE SI NO ENCUENTRA UNO EXISTENTE ENTRA DEL LADO 
         VERDADERO DEL IF*/
      if(Object.keys(res).length == 0)
      {
        this.phone = ""+this.modificarUsuario.value.Lada+this.modificarUsuario.value.Phone
        const nuevoUser: UpdateUser
        = 
        {
          nomUser: this.modificarUsuario.value.Name,
          apellUser: this.modificarUsuario.value.LastName,
          userN: this.modificarUsuario.value.LastName,
          mail: this.modificarUsuario.value.Mail,
          cell: this.phone
        }
        // SE REGISTRAN LAS MODIFICACIONES DEL USUARIO EN LA BASE DE DATOS
        // this._usuarioService.addUsuario(nuevoUser).subscribe();
        this.toastr.success('El registro se logró de manera exitosa', 'ACCION EXITOSA',
        {
          positionClass: 'toast-bottom-right'
        });
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

  mostrarDatos()
  {
    this.modificarUsuario.setValue({
      Name: this.nombre,
      LastName: this.apellido,
      UserName: this.nombreUser,
      Mail: this.correo,
      Lada: this.lada,
      Phone: this.phone
    });
  }
}
