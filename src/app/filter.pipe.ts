import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,inputVal:any,gender:any): any {
    // console.log(inputVal);
    // console.log(value);
    
    return value.filter((x:any)=>x.name.includes(inputVal) && x.gender == gender )
  }

}
