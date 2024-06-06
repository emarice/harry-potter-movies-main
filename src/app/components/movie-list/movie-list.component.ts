import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TimePipe } from '../../pipes/time.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, TimePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movieService = inject(MovieService);

  constructor() {}
}
