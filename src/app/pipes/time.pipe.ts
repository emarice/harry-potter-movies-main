import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  /**
   * Transforms a minute value into hours and minutes
   * @param value string representing the duration of a movie in minutes
   * @returns a string representing the duration of a movie in hours and minutes
   */
  transform(value: string): string {
    let duration: number = parseInt(value);
    return `${Math.floor(duration/60) > 0 ? Math.floor(duration/60) + 'h ' : ''}${Math.floor(duration % 60)}min`
  }

}
