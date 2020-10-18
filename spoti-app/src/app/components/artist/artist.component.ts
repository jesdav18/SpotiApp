import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artista : any = {};
  topTracks : any[] = [];
  loading : boolean;
  mostrarMensajeError : boolean;
  mensajeError : string;

  constructor(private router : ActivatedRoute, private spotifyService : SpotifyService) { 
    this.router.params.subscribe (params => {
      this.obtenerArtista(params['id']);
      this.obtenerTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  obtenerArtista( artistaId : string ){
    this.loading = true;
    this.mostrarMensajeError = false;
    this.spotifyService.getArtist( artistaId )
    .subscribe(data => {
      this.artista = data
      this.loading = false;   
    },
    (error) => {
      console.log(error);
      
      this.mostrarMensajeError = true;
      this.mensajeError = error.error.error.message;
      this.loading = false
    })
  }

  obtenerTopTracks(artistaId : string){
    this.loading = true;
    this.mostrarMensajeError = false;
    this.spotifyService.getTopTracks(artistaId)
    .subscribe(data => {
      this.loading = false;
      this.topTracks = data
      console.log(this.topTracks); 
    },
    (error)=>{
      console.log(error);
      
      this.mostrarMensajeError = false;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    })
  }

}
