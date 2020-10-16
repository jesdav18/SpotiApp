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
      'Authorization' : 'Bearer BQAfiaVjw4wMUVmG2JgV0eQ-inxiE95nRGbpPqUAwAOc4GatcLtMk7TSdNi4hg01Z-jP1QflhGJ4-Lzvd8Q'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
    .pipe( map ( data => data['albums'].items));
  }

  getArtista(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
  }
}
