import { utf8Encode } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const filteredArr: any = [];
    if(value.length === 0 || filterString === '' || propName === ''){
      return value;
    }

    value.forEach(element => {
      if(element[propName].toLowerCase() === filterString.toLowerCase()){
        filteredArr.push(element);
      }
    });

    return filteredArr;
  }

}
