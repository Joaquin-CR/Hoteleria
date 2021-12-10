import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{

  url = "http://localhost:3000/apiUsuarios";

  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getUsuarios()
  {
    return this._http.get(this.url);
  }
}
