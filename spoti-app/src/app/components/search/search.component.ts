import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading : boolean;
  artistas :any [] = [];

  constructor(private spotifyService : SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : string){

    if (termino.length === 0) {
      this.artistas = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.spotifyService.getArtistas(termino)
    .subscribe(data => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
