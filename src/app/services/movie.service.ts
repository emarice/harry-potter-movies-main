import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Movie } from '../types/movie';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_ENDPOINT: string = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  private getMovies$: Observable<Movie[]> = this.getMovies();
  movies: Signal<Movie[] | undefined> = toSignal<Movie[]>(this.getMovies$);

  private getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_ENDPOINT}/movies`).pipe(takeUntilDestroyed())
  }
}
