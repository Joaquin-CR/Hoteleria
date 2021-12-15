import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  
  @Input() llamarRes!: boolean;
  constructor() 
  { 
    // 
  }

  ngOnInit(): void {
  }

}
