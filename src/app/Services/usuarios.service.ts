import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{

  sesionUsuarioActiva = false;
  userName!: string;
  idUser: number = 0;
  url = "/api/";

  constructor(private _http: HttpClient,
              private _cookies: CookiesService) 
  {
    // 
  }

  loginUsuario()
  {
    this._cookies.checkToken();
    this.sesionUsuarioActiva = this._cookies.existenciaCookie
  }

  statusSesion()
  {
    return this.sesionUsuarioActiva;
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

  getUsuarios()
  {
    return this._http.get(this.url);
  }

  addUsuario(usuario: Usuario) //METE LOS VALORES DEL OBJETO QUE SIGUE EL PATRON DE LA INTERFAZ EXPORTADA DE USUARIO
  {
    // console.log("Reservacion agregada");
    return this._http.post(this.url+'/', usuario);
  }

  getUsuario(userName: string)
  {
    let user = this._http.get(this.url+'/'+userName);
    this.setDeafault();
    return user;
  }

  deleteUsuario(userName: string)
  {
    return this._http.delete(this.url+'/'+userName);
  }

  updateUsuario(id:string, usuario: Usuario)
  {
    return this._http.put(this.url+'/'+id, usuario);
  }

  setIdUser(id: number)
  {
    this.idUser = id;
  }

  getIdUsuario()
  {
    return this.idUser;
  }

  getUserName()
  {
    return this.userName;
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
