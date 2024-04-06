import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any ): string | any {
    const IF_EMPTY = value === undefined || value === null || value === '';

    if(IF_EMPTY) {
      return '-';
    }

    return value;
  }

}
