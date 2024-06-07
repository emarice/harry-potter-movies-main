import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal, Signal } from '@angular/core';
import { Movie } from '../types/movie';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { MovieDetail } from '../types/movie-detail';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  //Declaring the API URI
  private API_ENDPOINT: string = 'http://localhost:4200';

  //Injecting HttpClient
  constructor(private http: HttpClient) {}

  //#region Filters declaration

  //Declaring the filters signals with their own getters and setters to expose them as readonly signal
  private titleFilterSignal = signal('');
  private releaseFilterSignal = signal('');

  get titleFilter(): Signal<string> {
    return this.titleFilterSignal.asReadonly();
  }

  set titleFilter(value: string) {
    this.titleFilterSignal.set(value);
  }

  get releaseFilter(): Signal<string> {
    return this.releaseFilterSignal.asReadonly();
  }

  set releaseFilter(value: string) {
    this.releaseFilterSignal.set(value);
  }

  //#endregion

  //Converting the observable from the API call into a signal using the toSignal in order to subscribe to the call
  private getMovies$: Observable<Movie[]> = this.getMovies();
  private moviesList: Signal<Movie[]> = toSignal<Movie[]>(this.getMovies$);
  //Computing the moviesList signal to expose only the movies that satisfy the filter conditions
  movies: Signal<Movie[] | undefined> = computed(() =>
    this.filterMovies(this.moviesList)
  );

  private filterMovies(movies: Signal<Movie[]>): Movie[] {
    return movies()
      ? movies().filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(
                this.titleFilter()
                  ? this.titleFilter().toLowerCase()
                  : movie.title.toLowerCase()
              ) &&
            movie.release_date
              .split('-')[0]
              .includes(
                this.releaseFilter()
                  ? this.releaseFilter()
                  : movie.release_date.split('-')[0]
              )
        )
      : [];
  }

  //#region API calls

  private getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_ENDPOINT}/movies`).pipe(takeUntilDestroyed());
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieDetail>(`${this.API_ENDPOINT}/movies/${id}`).pipe(takeUntilDestroyed());
  }

  //#endregion
}
