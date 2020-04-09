import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    constructor(private http: HttpClient) { }
    searchTrack(query: string) {
      const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
      const headers = new HttpHeaders({
        Authorization:
        'Bearer BQAlAGvZY_TYA7ZLieBdUV1GEE9CujVE4RIqQJxYt_vhDLPhaPA45aH-nQ68yjmeXrD5cvDdTiG-SiN37CVP5N5YDbW4YsMBgZiPltiNJ0sZUwfpDGcNhBjIFlseB7wb5C0CWXeqZLhAHOnnXAld2f0tma0hfQ'
      });

      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
      }

}
