import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadosService } from '../Services/empleados.service';

@Injectable({
  providedIn: 'root'
})
export class LoginEmpleadoGuard implements CanActivate {
  constructor(private router: Router,
              private _empSession: EmpleadosService,
              private toastr: ToastrService,)
{
// 
}
  redirect(acceso: boolean): any{
    if(!acceso)
    {
      this.router.navigate(['/', 'acceso-empleado'])
      this.toastr.error('Acceso denegado', 'ERROR',
      {
        positionClass: 'toast-bottom-right'
      });
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let cookieVigente = this._empSession.statusSesion();
    this.redirect(cookieVigente);
    return cookieVigente;
  }
  
}
