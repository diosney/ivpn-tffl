import {
  Pipe,
  PipeTransform
} from '@angular/core';

import { UtilsService } from '@core/utils.service';

@Pipe({
  name: 'maskCardNumberMiddleChars'
})
export class MaskCardNumberMiddleCharsPipe implements PipeTransform {
  transform(input: string, maskingChar?: string): string {
    if (!input) {
      return input;
    }

    return UtilsService.maskCardNumberMiddleChars(input, maskingChar);
  }
}
