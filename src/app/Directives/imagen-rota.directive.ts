import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective
{

  @Input() urlCustom!: string;

  constructor(private elementRef: ElementRef) 
  { 
    //
  }

  
  @HostListener('error')
  cargarImagenPorDefecto()
  {
    const elemnt = this.elementRef.nativeElement;
    elemnt.src = this.urlCustom || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uia93jUhtlaNB5s9-xnmhh8tek0NsQ0BMg&usqp=CAU';
  }

}
