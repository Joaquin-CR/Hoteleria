import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  registroUsuario: FormGroup;
  submitted = false;
  loading = false;

  nombre: string;
  apellido: string;
  user: string;
  correo: string;
  contrasena: string;
  confirm_contrasena: string;
  telefono: string;

  constructor(private fb: FormBuilder,
              private router: Router) 
  {
    this.registroUsuario = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      LastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      UserName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Mail: ['', Validators.email],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ConfrimPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })

    this.nombre = "";
    this.apellido = "";
    this.user = "";
    this.correo = "";
    this.contrasena = "";
    this.confirm_contrasena = "";
    this.telefono = "";
  }

  ngOnInit(): void 
  {
    // 
  }

  nuevoRegistro()
  {
    this. contrasena = this.registroUsuario.value.Password;
    this.confirm_contrasena = this.registroUsuario.value.ConfrimPass;
    if(this.contrasena == this.confirm_contrasena)
    {
      this.nombre = this.registroUsuario.value.Name;
      this.apellido = this.registroUsuario.value.LastName;
      this.user = this.registroUsuario.value.UserName;
      this.correo = this.registroUsuario.value.Mail;
      this.telefono = this.registroUsuario.value.Phone;
    }
    else
    {
      // 
    }
    console.log("Si jala");
  }

}
