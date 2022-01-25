import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookiesService } from 'src/app/Services/cookies.service';
import { ReservacionesService } from 'src/app/Services/reservaciones.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{

  idUser!: number;
  llamarReservaccion: boolean = true;
  llamarNuevaRes: boolean = false;
  llamarConfig: boolean = false;

  btnMiRes: boolean = false;
  btnNewRes: boolean = true;
  btnConfig: boolean = true;
  constructor(private router: Router,
              private _cookies: CookiesService,
              private toastr: ToastrService,
              private _userService: UsuariosService,
              private _reservacion: ReservacionesService) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.setIdUser();

    let status = this._reservacion.getStatusRes;

    console.log(status);
    let vari = this._reservacion.reservacionPendiente;
    console.log(vari);
  }

  ngOnDestroy(): void
  {
    this._userService.setIdUser(this.idUser);
  }

  setIdUser()
  {
    this.idUser = this._userService.getIdUsuario();
  }

  activarReservaciones()
  {
    this.llamarReservaccion = true;
    this.llamarNuevaRes = false;
    this.llamarConfig = false;

    this.btnConfig = true;
    this.btnMiRes = false;
    this.btnNewRes = true;
  }

  activarConfiguraciones()
  {
    this.llamarConfig = true;
    this.llamarNuevaRes = false;
    this.llamarReservaccion = false;

    this.btnConfig = false;
    this.btnMiRes = true;
    this.btnNewRes = true;
  }

  activarNuevaRes()
  {
    this.llamarConfig = false;
    this.llamarNuevaRes = true;
    this.llamarReservaccion = false;

    this.btnConfig = true;
    this.btnMiRes = true;
    this.btnNewRes = false;
  }

  logout()
  {
    this._cookies.Logout();
    this._userService.loginUsuario(true);
    // this.router.navigate(['/landing']);
  }

}
