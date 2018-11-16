import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  
  transform(tel, args)
    {
        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        return value.replace(/(\d\d)(\d\d\d)(\d\d\d)(\d\d\d)/, '$1-$2-$3-$4');
    }
}
