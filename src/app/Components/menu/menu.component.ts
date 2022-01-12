import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/cookies.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{

  logeado!: boolean; 
  constructor(private _usuarioService: UsuariosService,
              private _cookies: CookiesService,
              private router: Router,) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.logeado = this._usuarioService.statusSesion();
  }

  cerrarSesion()
  {
    this._cookies.Logout();
    this._usuarioService.loginUsuario;
    // this.router.navigate(['/landingpage']);
  }

}
