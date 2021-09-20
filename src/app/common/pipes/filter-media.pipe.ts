import { Pipe, PipeTransform } from '@angular/core';
import {IMedia} from "../../model/media.model";

@Pipe({
  name: 'filterMedia'
})
export class FilterMediaPipe implements PipeTransform {
  transform(items: IMedia[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.Title.toLocaleLowerCase().includes(searchText) || (it.Year).toString().toLocaleLowerCase().includes(searchText);
    });
  }
}
