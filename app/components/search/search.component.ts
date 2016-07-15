import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../artist';
import { ROUTER_DIRECTIVES, Router } from '@angular/router'


@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent implements OnInit {

    searchStr: string;
    searchRes: Artist[];

    constructor(
        private _router: Router,
        private _spotifyService: SpotifyService,

    ) { }

    ngOnInit() { }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            });
    }

    onClickArtist(artist: Artist) {
        this._router.navigate(['/artist', artist.id])

    }

}
