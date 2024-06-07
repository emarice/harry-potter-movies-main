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
  /* Declaring the input formcontrols with default value equal to the signal value cached in the MovieService
  in order to display the same filter even if the user enters a movie detail and comes back to the homepage */
  titleControl: FormControl<string> = new FormControl<string>(this.movieService.titleFilter());
  releaseControl: FormControl<string> = new FormControl<string>(this.movieService.releaseFilter());


  constructor() {
    //Subscribing to the value change event of FormControls to update the filters signals on MovieService
    this.titleControl.valueChanges.subscribe({
      next: (value: string) => {
        //Update movie service title filter signal
        this.movieService.titleFilter = value;
      }
    })

    this.releaseControl.valueChanges.subscribe({
      next: (value: string) => {
        //Update movie service release year filter signal
        this.movieService.releaseFilter = value;
      }
    })
  }
}
