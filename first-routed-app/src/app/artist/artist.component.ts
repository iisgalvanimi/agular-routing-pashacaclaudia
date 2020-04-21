import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  spotifyServiceObs: any;
  artist : any;
  obsArtist: Observable<Object>;
  results: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService,
    private location: Location
  ) { }

   ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let artistId = params.get('id'); //Ottengo l'id dai parametri
    console.log (artistId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getArtist(artistId) ;
    this.spotifyServiceObs.subscribe((data)=>this.artist = data)
  }

 /**  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsArtist = this.service.getArtist(this.query);
    this.obsArtist.subscribe((data) => this.results = data);
  }


   renderResults(res: any): void {
    this.results = null;
    if (res && res.artist ) {
      this.results = res.artist;
    }
  }
  */

  back() : void
  {
    this.location.back();
  }
}
