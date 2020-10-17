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

  constructor(private spotifyService : SpotifyService) {
    this.getNewReleases();
  }

  ngOnInit(): void {
    
  }

  getNewReleases(){
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe(data => {
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
      this.loading = false;
    });
  }

}
