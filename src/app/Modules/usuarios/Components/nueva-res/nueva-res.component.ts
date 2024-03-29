import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservacion, ReservacionesService } from 'src/app/Services/reservaciones.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-nueva-res',
  templateUrl: './nueva-res.component.html',
  styleUrls: ['./nueva-res.component.css']
})
export class NuevaResComponent implements OnInit {

  nuevoRegistro: FormGroup;
  idUser!: number;

  @Input() llamarNewRes!: boolean;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _registroService: ReservacionesService,
              private router: Router,
              private _usuarioService: UsuariosService) 
  { 
    this.nuevoRegistro = this.fb.group({
      fecIn: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      fecOut: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumA: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumN: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumC: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]]
    });
  }

  ngOnInit(): void 
  {
    this.setIdUser();
  }

  setIdUser()
  {
    this.idUser = this._usuarioService.getIdUsuario();
  }

  agregarRegistro()
  {
    const  generateRandomString = () => {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result1= ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < 7; i++ ) {
          result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result1;
    }

    let idReservacion = ""+generateRandomString();
    const nuevaRes: Reservacion = 
    {
      idRes: idReservacion,
      idUser: this.idUser,
      fecIn: this.nuevoRegistro.value.fecIn,
      fecOut: this.nuevoRegistro.value.fecOut,
      numA: this.nuevoRegistro.value.NumA,
      numN: this.nuevoRegistro.value.NumN,
      numC: this.nuevoRegistro.value.NumC,
    }
    this._registroService.addReservacion(nuevaRes).subscribe();

    this.toastr.success('Reservción realizada exitosamente', 'Acción exitosa',
    {
      positionClass: 'toast-bottom-right'
    });
    this.router.navigate(['/landing']);
  }
}
