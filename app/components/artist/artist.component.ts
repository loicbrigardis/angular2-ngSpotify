import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../artist';
import { Album } from '../../album';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

    id: string;
    artist: Artist[];
    albums: Album[];

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

        this._spotifyService.getArtist(this.id).subscribe(
            artist => {
                this.artist = artist;
            }
        )

        this._spotifyService.getAlbums(this.id).subscribe(
            albums => {
                this.albums = albums.items;
            }
        )
    }

    onClickAlbum (album:Album) {
        this._router.navigate(['/album', album.id]);
    }

}
