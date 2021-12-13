import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{

  logeado!: boolean;
  userName!: string;
  idUser!: string;
  url = "/api/";

  constructor(private _http: HttpClient) 
  {
    // 
  }

  getLiga(liga: string)
  {
    this.url = this.url+liga;
  }

  setDeafault()
  {
    this.url = "/api/";
  }

  setUserName(usuario: string)
  {
    this.userName = usuario;
  }

  setIdUser(id: string)
  {
    this.idUser = id;
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
    let user = this._http.get(this.url+'/'+userName);
    this.setDeafault();
    return user;
  }

  deleteUsuario(userName:string)
  {
    return this._http.delete(this.url+'/'+userName);
  }

  updateUsuario(id:string, usuario: Usuario)
  {
    return this._http.put(this.url+'/'+id, usuario);
  }

  usuarioLogeado(logeado: boolean)
  {
    this.logeado = logeado;
  }

  setUsuarioLogeado(user: string)
  {
    this.idUser = user;
  }

  getIdUsuario()
  {
    return this.idUser
  }

  getUserName()
  {
    return this.userName;
  }

  getStatusLogeado()
  {
    return this.logeado;
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

export interface UpdateUser
{
  nomUser: string;
  apellUser: string;
  userN: string;
  mail: string;
  cell: string;
}

export interface PassUpdateUser
{
  pass: string;
}
