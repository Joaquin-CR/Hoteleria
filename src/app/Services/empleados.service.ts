import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService 
{

  url = "http://localhost:3000/apiEmpleados";

  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getEmpleados()
  {
    return this._http.get(this.url);
  }
}
