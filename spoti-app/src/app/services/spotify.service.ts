import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDZULgXf-zSXoPsDoiLXCGuCtOTtBTM73MAE3pLHsrAcgI3o7bJWxi7j9q_ZHVxWbK8gXo5h9L21qObo8U'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    .pipe( map ( data => data['albums'].items));
  }

  getArtista(termino : string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDZULgXf-zSXoPsDoiLXCGuCtOTtBTM73MAE3pLHsrAcgI3o7bJWxi7j9q_ZHVxWbK8gXo5h9L21qObo8U'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    .pipe( map( data => data['artists'].items));
  }
}
