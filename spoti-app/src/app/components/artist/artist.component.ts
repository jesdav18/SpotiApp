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
  loading : boolean;

  constructor(private router : ActivatedRoute, private spotifyService : SpotifyService) { 
    this.router.params.subscribe (params => {
      this.obtenerArtista(params['id']);

      //hola david escrita por alejandra
    });
  }

  ngOnInit(): void {
  }

  obtenerArtista( artistaId : string ){
    this.loading = true;
    this.spotifyService.getArtist( artistaId )
    .subscribe(data => {
      this.artista = data
      this.loading = false;   
    })
  }

}
