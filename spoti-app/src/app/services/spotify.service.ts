import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getQuery(query : string){
    const url = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDc0rjM9wDJeLvz0d2EqNE2iPiw2IVLKuxcV9yL-8m2Z2dZ-DntXH2hKIf487R27ucDhL-BILhRWrpbM1A'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
    .pipe( map ( data => data['albums'].items));
  }

  getArtistas(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
  }

  getArtist(artistaId : string){
    return this.getQuery(`artists/${artistaId}`);
  }

}
