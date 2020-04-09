import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  title = 'Routing Angular';
  obsTrack : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("Volar");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  }

}*/
export class AppComponent {
  query: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {

  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data);
  }
}

