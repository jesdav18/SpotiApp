import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQArM5ECdsnmTIWZCQ09oiQJuFPWUdlVMtByQsfIVGI-NZSje3MqQPVQFmxcmJ0BHGIkDIz9AnxjJPV9b80'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});
  }
}
