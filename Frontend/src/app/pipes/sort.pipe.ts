import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<String>, fields: any[]): any {
    const sortField = fields[0];
    const sortOrder = fields[1];

    if(value.length === 0 || sortField === ''){
      return value;
    }


    let multiplier = 1;
    if(sortOrder === 'desc'){
      multiplier = -1;
    }
    value.sort((a: any, b: any) => {
      if(a[sortField] < b[sortField]){
        return -1 * multiplier;
      } else if(a[sortField] > b[sortField]){
        return 1 * multiplier;
      } else {
        return 0;
      }
    })
    return value;
  }

}
