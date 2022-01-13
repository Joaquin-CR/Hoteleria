import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookiesService } from 'src/app/Services/cookies.service';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { Reservacion, ReservacionesService, reservacionPendiente } from 'src/app/Services/reservaciones.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
// import { CookiesService } from 'src/app/Services/cookies-s.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit 
{
  nuevoRegistro: FormGroup;
  submitted = false;
  loading = false;

  idUser!: number;
  tipo: string = "MXN";
  HabitacionDueluxDoble: number = 5097.83;
  HabitacionDueluxSencilla: number = 4078.26;
  SuitHoney: number = 15293.48;
  HabitacionDobleEconom: number = 3670.44;
  
  constructor(private fb: FormBuilder,
              private _usuariosService: UsuariosService,
              private _empleadosService: EmpleadosService,
              private _reservacionesService: ReservacionesService,
              private _cookies: CookiesService,
              ) 
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
    //
  }

  agregarRegistro()
  {
    this.loading = true;
    this.submitted = true;

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
    if(this._cookies.checkToken(false))
    {
      this.idUser = +this._usuariosService.getIdUsuario();
      console.log(this.idUser);
      console.log(this.nuevoRegistro);
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
      this._reservacionesService.addReservacion(nuevaRes).subscribe();
      
      this._reservacionesService.getReservaciones().subscribe(res =>{
        console.log(res)
      },
        err => console.log(err)
      )
    }
    else
    {
      this._reservacionesService.setStatusRes(true);
      const pendienteRes: reservacionPendiente = 
      {
        idRes: idReservacion,
        fecIn: this.nuevoRegistro.value.fecIn,
        fecOut: this.nuevoRegistro.value.fecOut,
        numA: this.nuevoRegistro.value.NumA,
        numN: this.nuevoRegistro.value.NumN,
        numC: this.nuevoRegistro.value.NumC,
      }
      this._reservacionesService.reservacionPendiente(pendienteRes);
    }
  }

}
