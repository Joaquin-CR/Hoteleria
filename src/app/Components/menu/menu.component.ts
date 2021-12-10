import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{

  logeado: boolean = this._usuarioService.logeado 
  constructor(private _usuarioService: UsuariosService,
              private router: Router,) 
  { 
    // 
  }

  ngOnInit(): void {
  }

  cerrarSesion()
  {
    this._usuarioService.usuarioLogeado(false);
    this.router.navigate(['/landingpage']);
  }

}
