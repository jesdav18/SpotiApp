import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loading : boolean;
  mostrarMensajeError : boolean;
  mensajeError : string;

  constructor(private spotifyService : SpotifyService) {
    this.getNewReleases();
  }

  ngOnInit(): void {
    
  }

  getNewReleases(){

    this.loading = true;
    this.mostrarMensajeError = false;

    this.spotifyService.getNewReleases()
    .subscribe(data => {

      this.nuevasCanciones = data;
      this.loading = false;

    },(error)=>{
      console.log(error);
      
      this.mostrarMensajeError = true;
      this.loading = false;
      this.mensajeError = error.error.error.message
      
    });
  }

}
