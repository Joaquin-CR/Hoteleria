import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {

  modificarUsuario: FormGroup;
  modificarContra: FormGroup;
  nombre = "Joaquin";
  apellido = "Carreño";
  nombreUser = "JJ";
  correo = "joaquin@gmail.com";
  lada: string = "+52";
  phone = "2228634123";
  telefono = "+522228634123";
  editar = false;
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
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ConfirmPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    });
    // this.llamarConfigUser = true;
  }

  ngOnInit(): void {
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

  cancelarUpdate()
  {
    this.editar = false;
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
  // this.crearLibro.setValue({})
}
