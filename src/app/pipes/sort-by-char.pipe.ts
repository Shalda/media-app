import {Pipe, PipeTransform} from '@angular/core';

import {IMedia} from "../model/media.model";

@Pipe({
  name: 'sortByChar'
})
export class SortByCharPipe implements PipeTransform {
  transform(values: IMedia[], reverse: boolean = false): IMedia[] {
    if (reverse) {
      return values.sort((a, b) => b.Title.localeCompare(a.Title));
    } else {
      return values.sort((a, b) => a.Title.localeCompare(b.Title));
    }
  }
}
