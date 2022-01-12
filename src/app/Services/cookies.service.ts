import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CookiesService 
{

  existenciaCookie: boolean;

  constructor(private router: Router,
              private toastr: ToastrService,
              private _cookies: CookieService,) 
  { 
    this.existenciaCookie = false;
  }

  setToken(token: string, minutos: number)
  {
    this._cookies.set("token", token, minutos);
  }

  getToken()
  {
    return this._cookies.get("token");
  }

  getRandomToken(size: number)
  {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < size; i++)
    {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    // console.log(result);
    return result;
  }

  Logout()
  {
    // console.log('Borrando');
    this._cookies.delete("token", "/");
    this.toastr.info('Usted a cerrado sesion', 'Cerrar sesion',
    {
      positionClass: 'toast-bottom-right'
    });
    this.router.navigate(['/landing']);
  }

  nuevaExpiracion(minutos: number)
  {
    return (1/1440)*minutos;
  }

  checkToken()
  {
    let cookie = this.getToken();
    if(!cookie)
    {
      this.Logout();
      // CHECAR PARA CUANDO SE HAGA UNA RESERVACION DESDE LA LANDINGPAGE
      this.toastr.warning('Favor de iniciar sesion antes de ejecutar cualquier acción', 'ADVERTENCIA',
          {
            positionClass: 'toast-bottom-right'
          });
      this.existenciaCookie = false;
    }
    else
    {
      this.setToken(this.getToken(), this.nuevaExpiracion(2));
      // console.log("Token renovado");
      this.existenciaCookie = true;
    }
    return cookie;
  }
}
