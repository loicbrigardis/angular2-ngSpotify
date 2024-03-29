import { provideRouter, RouterConfig } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';



export const routes: RouterConfig = [
  { path: 'search',      component: SearchComponent },
  { path: 'about',       component: AboutComponent },
  { path: 'artist/:id',  component: ArtistComponent }
  { path: 'album/:id',  component: AlbumComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];