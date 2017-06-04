import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'donepipe'
})
export class DonepipePipe implements PipeTransform {

  transform(value: boolean, args?: boolean): any {
    if (value) {
      return '(Finished)';
    } else if (args) {
      return '(UnFinished)';
    }
    return '(BothFalse)';
  }

}
