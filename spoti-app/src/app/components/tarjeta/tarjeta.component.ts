import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() esCancion : boolean;
  @Input() dataSource : any [] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  verArtista( item : any){

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    }
    else{
      artistaId = item.artist[0].id;
    }

    this.router.navigate([ '/artist' , artistaId ])
    console.log(artistaId);
  
  }

}
