import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieFilterComponent } from '../movie-filter/movie-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieListComponent, MovieFilterComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
