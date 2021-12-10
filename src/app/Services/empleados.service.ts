import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService 
{

  url = "/api/empleados";

  constructor(private _http: HttpClient) 
  { 
    // 
  }

  getEmpleados()
  {
    return this._http.get(this.url);
  }

  addEmpleadp(empleado: Empleado) //Mete los valores que se encuentran en el export de Reservaciones
  {
    return this._http.post(this.url+'/', empleado);
  }

  getempleado(idEmpleado:string)
  {
    return this._http.get(this.url+'/'+idEmpleado);
  }

  deleteEmpleado(idEmpleado:string)
  {
    return this._http.delete(this.url+'/'+idEmpleado);
  }

  updateEmpleado(id:string, empleado: Empleado)
  {
    return this._http.put(this.url+'/'+id, empleado);
  }
}

export interface Empleado
{
  id: number;
  nomEmpleado: string;
  appellEmpleado: string;
  mail: string;
  pass: string;
  puesto: string;
}
