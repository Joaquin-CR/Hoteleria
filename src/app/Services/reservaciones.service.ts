import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReservacionesService {

  url = "/api/reservacion";
  pendiente!: reservacionPendiente;

  /* CUANDO NO HAY RESERVACION PENDIENTE FALSE, CUANDO HAY UNA RESERVACIÓN QUE SE 
  TRAE DIRECTO DE LA LANDING ES TRUE */
  status: boolean = false;
  
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

  obtenerMiReservacion(id: string)
  {
    console.log(id);
    return this._http.get("/api/mireservacion/"+id);
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

  reservacionPendiente(pendiente: reservacionPendiente)
  {
    this.pendiente = pendiente;
  }

  getResPendiente()
  {
    return this.pendiente;
  }

  setStatusRes(estado: boolean)
  {
    this.status = estado;
  }

  getStatusRes()
  {
    return this.status;
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

export interface reservacionPendiente
{
  idRes: string;
  fecIn: string;
  fecOut: string;
  numA: number;
  numN: number;
  numC: number;
}
