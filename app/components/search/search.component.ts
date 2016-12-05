import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../custom_classes/Artist'

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent  {
    searchString: string;
    searchResults: Artist[];
    constructor(private _spotify_service: SpotifyService){

    }

    searchMusic(){
        this._spotify_service.searchMusic(this.searchString).subscribe( res => {
                this.searchResults = res.artists.items;
            }
        );
    }

}
