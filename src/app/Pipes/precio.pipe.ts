import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(precio: number, args?:any): any
  {
    if(args != null)
    {
      //SE HACE EL CAMBIO A DOLLARES
      if(args == 'USD')
      {
        return precio * 20.39;
      }

      //SE HACE EL CAMBIO A EUROS
      if(args == "EUR")
      {
        return precio == 23.17;
      }

      //SE HACE EL CAMBIO A YENS
      if(args == "MXN")
      {
        return precio * 1;
      }
    }
    else
    {
      return precio;
    }
    return null;
  }

}
