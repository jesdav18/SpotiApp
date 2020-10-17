import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() esCancion : boolean;
  @Input() dataSource : any [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
