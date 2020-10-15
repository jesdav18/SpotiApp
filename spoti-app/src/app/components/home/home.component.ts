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

  constructor(private spotifyService : SpotifyService) {
  
  }

  ngOnInit(): void {
    this.getNewReleases();
  }

  getNewReleases(){
    this.spotifyService.getNewReleases()
    .subscribe((data : any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }

}
