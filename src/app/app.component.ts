import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieFilterComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';
}
