import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDetail } from '../../types/movie-detail';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouteResolve } from '../../types/route-resolve';
import { MillionPipe } from '../../pipes/million.pipe';
import { TimePipe } from '../../pipes/time.pipe';
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatIconModule, MillionPipe, TimePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  movieDetails!: MovieDetail;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe({
      next: (result: RouteResolve) => {
        this.movieDetails = result.details;
        this.movieDetails.producers
      },
    });
  }
}
