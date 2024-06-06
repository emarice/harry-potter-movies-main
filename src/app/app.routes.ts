import { Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { movieResolver } from './resolvers/movie.resolver';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movies/:id',
        component: MovieDetailComponent,
        resolve: {details: movieResolver},
        pathMatch: "full"
    }
];
