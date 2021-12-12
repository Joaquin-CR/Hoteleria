import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservacionesService } from 'src/app/Services/reservaciones.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  idUser!: string;
  res!: any[][];

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
    // 
  }

  setIdUser()
  {
    this.idUser = this._usuarioService.getIdUsuario();
  }

  getReservaciones()
  {
    this._reservacionService.obtenerMiReservacion("1").subscribe(data =>{
      if(Object.keys(data).length == 0)
      {
        let nota = "No cuenta aun con una reservación"
      }
      else
      {
        var reservaciones = Object.values(data);
        console.log(reservaciones[0]['id_res']);
        // reservaciones.forEach((element: any) => {
        //   this.res.push({id: element['id_res']})});
        // console.log(this.res);
        console.log(reservaciones);
      }
    });
  }
}
