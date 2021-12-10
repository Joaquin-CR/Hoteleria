import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  url = "/api/reservacion";
  
  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getReservaciones()
  {
    return this._http.get(this.url);
  }

  addReservacion(reservacion: Reservacion) //Mete los valores que se encuentran en el export de Reservaciones
  {
    // console.log("Reservacion agregada");
    return this._http.post(this.url+'/', reservacion);
  }

  getReservacion(id:string)
  {
    return this._http.get(this.url+'/'+id);
  }

  deleteReservacion(id:string)
  {
    return this._http.delete(this.url+'/'+id);
  }

  updateReservacion(id:string, reservacion: Reservacion)
  {
    return this._http.put(this.url+'/'+id, reservacion);
  }

}

export interface Reservacion
{
  idRes: string;
  idUser: number;
  fecIn: string;
  fecOut: string;
  numA: number;
  numN: number;
  numC: number;
}
