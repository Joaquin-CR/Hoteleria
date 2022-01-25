import { Component, Input, OnInit } from '@angular/core';
import { ReservacionCheck, ReservacionesService } from 'src/app/Services/reservaciones.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  
  nota: boolean = false;

  idUser!: number;
  idRes!: string;
  fecRes!: string;
  fecIn!: string;
  fecOut!: string;
  numA!: number;
  numN!: number;
  numC!: number;
  statusRes!: number;

  datosReservacion: ReservacionCheck[] = new Array;
  @Input() llamarRes!: boolean;
  constructor(private _reservacionService: ReservacionesService) 
  { 
    // 
  }

  ngOnInit(): void 
  {
  }

  getReservaciones()
  {
    this._reservacionService.getReservaciones().subscribe(data =>{
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
          this.idUser = reservaciones[i]['iduser_res'];
          this.idRes = reservaciones[i]['id_res'];
          this.fecRes = reservaciones[i]['fecRes_res']; 
          this.fecIn = reservaciones[i]['fecIn_res'];
          this.fecOut = reservaciones[i]['fecOut_res'];
          this.numA = reservaciones[i]['numA_res'];
          this.numN = reservaciones[i]['numN_res'];
          this.numC = reservaciones[i]['numC_res'];
          this.statusRes = reservaciones[i]['status_res'];
          var fechaRes = this.fecRes.substring(0, 10);
          var fechaIn = this.fecIn.substring(0, 10);
          var fechaOut = this.fecOut.substring(0, 10);
          this.datosReservacion.push({
            idRes: this.idRes, idUser: this.idUser, fecRes: fechaRes, fecIn: fechaIn, fecOut: fechaOut, numA: this.numA, numN: this.numN, numC: this.numC, statusRes: this.statusRes
          });
        }
      }
    });
  }

}
