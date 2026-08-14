import { Routes } from '@angular/router';
import {ArtGalleryComponent} from "./pages/art-gallery/art-gallery.component";
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [

      {
        path: '',
        component: HomeComponent
      },

    {
    path: 'art-gallery',
    component: ArtGalleryComponent
  }
];
