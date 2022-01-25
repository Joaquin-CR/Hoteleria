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

  logeado!: boolean; 
  constructor(private _usuarioService: UsuariosService,
              private router: Router,) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    // 
  }

  // CHECAR ESTA PARTE DEL MENU EL PORQUE NO QUIERE JALAR
  checkUsuario()
  {
    this.logeado = this._usuarioService.statusSesion();
    this.router.navigate(['/usuarios']);
  }

}
