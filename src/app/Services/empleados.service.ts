import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService 
{

  url = "/apiEmpleados";

  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getEmpleados()
  {
    return this._http.get(this.url);
  }
}
