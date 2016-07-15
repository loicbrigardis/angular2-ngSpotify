import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../artist';
import { Album } from '../../album';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

    id: string;
    album: Album[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _spotifyService: SpotifyService
        ) { 

        }

    ngOnInit() { 
        this._route.params.subscribe(params => {
            this.id = params['id'];
        });

        this._spotifyService.getAlbum(this.id).subscribe(
            album => {
                this.album = album;
                console.log(this.album)
            }
        )

    }

    

}
