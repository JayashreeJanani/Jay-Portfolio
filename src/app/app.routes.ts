import { Routes } from '@angular/router';
import {ArtGalleryComponent} from "./pages/art-gallery/art-gallery.component";
import { HomeComponent } from './pages/home/home.component';
import {BooksComponent} from './pages/books/books.component';
import { SecretsWeShareComponent } from './pages/reviews/secrets-we-share/secrets-we-share.component';
import { SherlockHolmesComponent } from './pages/reviews/sherlock-holmes/sherlock-holmes.component';
import { AtomicHabitsComponent } from './pages/reviews/atomic-habits/atomic-habits.component';
import { HomecomingComponent } from './pages/reviews/homecoming/homecoming.component';
import { High5HabitsComponent } from './pages/reviews/high-5-habits/high-5-habits.component';
import { TheOtherSideOfMidnightComponent } from './pages/reviews/the-other-side-of-midnight/the-other-side-of-midnight.component';
import { ResumeComponent } from './pages/resume/resume.component';
export const routes: Routes = [

      {
        path: '',
        component: HomeComponent
      },

    {
    path: 'art-gallery',
    component: ArtGalleryComponent
    },
     {
    path: 'books',
    component: BooksComponent
    },

    {
    path: 'books/the-secrets-we-share/review',
    component: SecretsWeShareComponent
    },
      {
    path: 'books/sherlock-holmes/review',
    component: SherlockHolmesComponent
  },
  {
    path: 'books/atomic-habits/review',
    component: AtomicHabitsComponent
  },
  {
    path: 'books/homecoming/review',
    component: HomecomingComponent
  },
  {
    path: 'books/high-5-habits/review',
    component: High5HabitsComponent
  },
  {
    path: 'books/the-other-side-of-midnight/review',
    component: TheOtherSideOfMidnightComponent
  },
  
   {
    path: 'resume',
    component: ResumeComponent
  }

];
