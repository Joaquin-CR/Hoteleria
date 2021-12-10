import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{

  url = "/api/usuarios";

  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getUsuarios()
  {
    return this._http.get(this.url);
  }

  addUsuario(usuario: Usuario) //Mete los valores que se encuentran en el export de Reservaciones
  {
    // console.log("Reservacion agregada");
    return this._http.post(this.url+'/', usuario);
  }

  getUsuario(userName:string)
  {
    return this._http.get(this.url+'/'+userName);
  }

  deleteUsuario(userName:string)
  {
    return this._http.delete(this.url+'/'+userName);
  }

  updateReservacion(id:string, usuario: Usuario)
  {
    return this._http.put(this.url+'/'+id, usuario);
  }

}

export interface Usuario
{
  nomUser: string;
  apellUser: string;
  userN: string;
  mail: string;
  pass: string;
  cell: string;
}
