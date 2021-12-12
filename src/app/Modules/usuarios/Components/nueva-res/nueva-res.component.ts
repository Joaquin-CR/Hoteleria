import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-res',
  templateUrl: './nueva-res.component.html',
  styleUrls: ['./nueva-res.component.css']
})
export class NuevaResComponent implements OnInit {

  @Input() llamarNewRes!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
