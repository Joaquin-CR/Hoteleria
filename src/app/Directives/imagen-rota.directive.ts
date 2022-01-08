import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective
{

  constructor(private elementRef: ElementRef) 
  { 
    // 
  }

  @HostListener('error')
  cargarImagenPorDefecto()
  {
    const elemnt = this.elementRef.nativeElement;
    elemnt.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uia93jUhtlaNB5s9-xnmhh8tek0NsQ0BMg&usqp=CAU';
  }

}
