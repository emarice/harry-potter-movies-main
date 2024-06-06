import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: string): string {
    let duration: number = parseInt(value);
    return `${Math.floor(duration/60) > 0 ? Math.floor(duration/60) + 'h ' : ''}${Math.floor(duration % 60)}min`
  }

}
