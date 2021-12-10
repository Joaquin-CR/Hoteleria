import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  url = "/apiReservacion";
  
  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getReservacion()
  {
    return this._http.get(this.url);
  }
}
