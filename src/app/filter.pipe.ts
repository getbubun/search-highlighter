import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
if(!value || !args)
    return value;
    else

    // comparing searched arguement to original value in lowercase 
    return value.filter(v => 
      v.name.toLowerCase().indexOf(args.toLowerCase()) !=-1 || v.address.street.toLowerCase().indexOf(args.toLowerCase()) !=-1 || v.address.city.toLowerCase().indexOf(args.toLowerCase()) !=-1 )

  }

}
