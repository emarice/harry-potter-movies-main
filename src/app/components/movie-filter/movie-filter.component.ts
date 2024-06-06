import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  movieService = inject(MovieService);
  titleControl: FormControl<string> = new FormControl<string>(this.movieService.titleFilter());
  releaseControl: FormControl<string> = new FormControl<string>(this.movieService.releaseFilter());


  constructor() {
    this.titleControl.valueChanges.subscribe({
      next: (value: string) => {
        //Update movie service signal
        this.movieService.titleFilter = value;
      }
    })

    this.releaseControl.valueChanges.subscribe({
      next: (value: string) => {
        //Update movie service signal
        this.movieService.releaseFilter = value;
      }
    })
  }
}
