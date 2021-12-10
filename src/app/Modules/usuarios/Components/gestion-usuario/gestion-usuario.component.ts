import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {

  @Input() llamarConfigUser!: boolean;
  constructor() 
  { 
    // this.llamarConfigUser = true;
  }

  ngOnInit(): void {
  }

}
