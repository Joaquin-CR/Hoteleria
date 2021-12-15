import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-empleados',
  templateUrl: './gestion-empleados.component.html',
  styleUrls: ['./gestion-empleados.component.css']
})
export class GestionEmpleadosComponent implements OnInit {

  @Input() llamarGesEmpl!: boolean;
  constructor() 
  { 
    // 
  }

  ngOnInit(): void {
  }

}
