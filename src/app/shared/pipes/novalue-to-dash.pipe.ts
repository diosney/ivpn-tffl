import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';

@Pipe({
  name: 'defaultsToDash'
})
export class DefaultsToDashPipe implements PipeTransform {
  transform(input: any): string {
    return input || _t('-');
  }
}
