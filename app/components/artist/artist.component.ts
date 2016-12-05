import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from '../../custom_classes/Artist';
import { Album } from '../../custom_classes/Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})

export class ArtistComponent{
    id: string;
    artist: Artist[];
    albums: Album[];

  constructor(private _SpotifyService: SpotifyService,
              private _routes: ActivatedRoute){

  }

  ngOnInit(){
    this._routes.params
      .map(params => params['id'])
      .subscribe((id) => {
      this._SpotifyService.getArtist(id).subscribe(artist =>
        this.artist = artist
      );
    })
  }

}
