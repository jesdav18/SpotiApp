import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBSdrUqrYojQOjE0XLaGuscGKItOBL_JIamZVYdwZ3RdqFLu6CsU6BmnkNBE3MJGEihm-f_EI2Wz5c7-1A'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});
  }

  getArtista(termino : string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBSdrUqrYojQOjE0XLaGuscGKItOBL_JIamZVYdwZ3RdqFLu6CsU6BmnkNBE3MJGEihm-f_EI2Wz5c7-1A'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
