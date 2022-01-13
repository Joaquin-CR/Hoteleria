import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../Services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUsersGuard implements CanActivate {

  cookieVigente!: boolean;

  constructor(private router: Router,
                private _userService: UsuariosService,
                private toastr: ToastrService,)
  {
    // 
  }

  redirect(acceso: boolean): any{
    if(!acceso)
    {
      this.router.navigate(['/', 'login'])
      this.toastr.error('Acceso denegado', 'ERROR',
      {
        positionClass: 'toast-bottom-right'
      });
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.cookieVigente = this._userService.statusSesion();
      this.redirect(this.cookieVigente);
    return this.cookieVigente;
  }
  
}
