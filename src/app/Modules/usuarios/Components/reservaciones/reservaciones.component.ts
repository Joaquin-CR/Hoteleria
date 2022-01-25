import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reservacion, ReservacionesService, reservacionPendiente } from 'src/app/Services/reservaciones.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit 
{

  nota: boolean = false;
  idUser!: number;
  id!: string;
  idRes!: string;
  fecIn!: string;
  fecOut!: string;
  numA!: number;
  numN!: number;
  numC!: number;
  datosReservacion: reservacionPendiente[] = new Array;


  @Input() llamarMiRes!: boolean;
  constructor(private _reservacionService: ReservacionesService,
              private toastr: ToastrService,
              // private router: Router,
              private _usuarioService: UsuariosService) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.setIdUser();
    console.log(this.idUser);
    this.id = this.idUser.toString();
    this.getReservaciones(this.id);
  }

  ngOnChange(): void
  {
    if(this.llamarMiRes)
    {
      this.getReservaciones(this.id);
    }
  }
  ngOnDestroy(): void
  {
    this._usuarioService.setIdUser(this.idUser);
  }

  setIdUser()
  {
    this.idUser = this._usuarioService.getIdUsuario();
  }

  getReservaciones(id: string)
  {
    this._reservacionService.obtenerMiReservacion(id).subscribe(data =>{
      if(Object.keys(data).length == 0)
      {
        this.nota = true;
      }
      else
      {
        var reservaciones = Object.values(data);
        console.log(reservaciones);
        for(let i=0; i<reservaciones.length; i++)
        {
          this.idRes = reservaciones[i]['id_res'];
          this.fecIn = reservaciones[i]['fecIn_res'];
          this.fecOut = reservaciones[i]['fecOut_res'];
          this.numA = reservaciones[i]['numA_res'];
          this.numN = reservaciones[i]['numN_res'];
          this.numC = reservaciones[i]['numC_res'];
          var fechaIn = this.fecIn.substring(0, 10);
          var fechaOut = this.fecOut.substring(0, 10);
          this.datosReservacion.push({
            idRes: this.idRes, fecIn: fechaIn, fecOut: fechaOut, numA: this.numA, numN: this.numN, numC: this.numC
          });
        }
      }
    });
  }
}