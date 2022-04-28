import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado, EmpleadosService } from 'src/app/Services/empleados.service';

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
              private router: Router,
              private _empleadoService: EmpleadosService,
              private toastr: ToastrService) 
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
    //EXTRAE LA INFORMACION DEL FORMULARIO DE LA VISTA
    this.contrasena = this.registroEmpleado.value.Password;
    this.confirm_contrasena = this.registroEmpleado.value.ConfirmPass;

    //SE VERIFICA QUE EL EMPLEADO NO SE ENCUENTRE REGISTRADO ACTUALMENTE (ID, CORREO, NOMBRE Y APELLIDO)
    let idEmpleado = this.id+"";
    this._empleadoService.getEmpleado(idEmpleado).subscribe(data => {
      
      //SE GUARDA TODA LA INFORMACION EXTRAIDA EN LA VARIABLE empleado
      var empleado = Object.values(data);
      /*sif(Object.keys(data).length == 0)
      {
        this.toastr.warning('No se encontró registro del empleado', 'ADVERTENCIA',
        {
          positionClass: 'toast-bottom-right'
        });
      }
      else
      {
        
        var empleado = Object.values(data);
        //let idEmpleado = usuario[0]['id_user'];
        let pass = empleado[0]['password_empleado'];
          this.toastr.success('Acceso concedido', 'Acción exitosa',
          {
            positionClass: 'toast-bottom-right'
          });
          //SE REDIRECCIONA A LA PÁGINA DE EMPLEADO
          this.router.navigate(['/empleados']);
         
      }*/
    });

    //SE VERIFICA QUE LAS CONTRASEÑAS COINCIDAN
    if(this.contrasena == this.confirm_contrasena)
    {
      const newEpmleado: Empleado = 
          {
            id: this.id,
            nomEmpleado: this.registroEmpleado.value.Name,
            appellEmpleado: this.registroEmpleado.value.LastName,
            mail: this.registroEmpleado.value.Mail,
            pass: this.contrasena,
            puesto: this.registroEmpleado.value.Cargo
          } 
    }
    else
    {
      this.toastr.error('Las contraseñas no coinciden', 'Error',
        {
          positionClass: 'toast-bottom-right'
        });
    }

    //HACER EL REGISTRO EN LA BASE DE DATOS

    //VUELVE A GENERAR UN ID Y LO MUESTRA EN PANTALLA YA CON LOS CAMPOS LIMPIOS
    this.loading = false;
    this.limpiarCampos();
    this.id = this.random();
    this.mostrarDatos(); 
  }

  random() 
  {
    return Math.floor((Math.random() * (2000000 - 1000000 + 1)) + 1000000);
  }

  limpiarCampos()
  {
    this.registroEmpleado.setValue({
      Name: "",
      LastName: "",
      ID: "",
      Cargo: "",
      Mail: "",
      Password: "",
      ConfirmPass: ""
    });
  }

  mostrarDatos()
  {
    /*
      CUANDO SE DESEA MOSTRAR ALGO EN UN SOLO CAMPO DEL FORM GROUP 
      SE UTILIZA LA FUNCION .patchValue YA QUE SI SE UTILIZA  .setValue 
      ESTAMOS OBLIGADOS A PASAR INFORMACIÓN A TODOS LOS CAMPOS DEL FORMGROUP
     */
    this.registroEmpleado.patchValue({
      ID: this.id
    });
  }

  registrarNuevoEmpleado()
  {
    // 
  }

}
