import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'million',
  standalone: true
})
export class MillionPipe implements PipeTransform {

  /**
   * Transforms a string into a formatted currency string ${value} million
   * @param value the value to convert into million
   * @returns the formatted string ${value} million
   */
  transform(value: string): string {
    return `$${value} million`;
  }

}
