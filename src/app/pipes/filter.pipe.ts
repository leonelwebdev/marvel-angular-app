import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const searchResult = [];
    for(const character of value) {
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        searchResult.push(character);
      }
    }
    return searchResult;
  }

}
