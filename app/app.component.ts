import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
 
import { SpotifyService } from './components/services/spotify.service';
import { NavBarTopComponent } from './components/navbar-top/navbar-top.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [NavBarTopComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent, ROUTER_DIRECTIVES],
    providers: [SpotifyService]
})
export class AppComponent { 
    
    constructor () {

    }
}
