import {
  Pipe,
  PipeTransform
} from '@angular/core';

import IMask from 'imask';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {
  transform(input?: string, maskOpts: any = {}): string {
    if (!input) {
      return '-';
    }

    let masked = IMask.createMask(maskOpts);
    return masked.resolve(input);
  }
}
