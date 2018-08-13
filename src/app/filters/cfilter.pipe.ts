import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfilter'
})
export class CfilterPipe implements PipeTransform {

  transform(value: any, lookUpName: string): any {
    console.log('in transform lookUpName = ' + lookUpName);

    if (value.length === 0 || lookUpName === '') {
      return value;
    }
    const result = [];
    for (const companion of value) {
      if (companion.name.toLowerCase().includes(lookUpName.toLowerCase()) ) {
        result.push(companion);
      }
    }
    return result;
  }

}
