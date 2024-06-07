import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovieDetail } from '../types/movie-detail';
import { MovieService } from '../services/movie.service';

//Getting the movie details while resolving the navigation by injecting and calling the MovieService
export const movieResolver: ResolveFn<MovieDetail> = (route, state) => {
  const movieService = inject(MovieService);
  return movieService.getMovieDetails(route.params['id']);
};
