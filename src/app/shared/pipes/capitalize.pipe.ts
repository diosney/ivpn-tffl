import {
  Pipe,
  PipeTransform
} from '@angular/core';

import { UtilsService } from '@core/utils.service';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(input: string): string {
    if (!input) {
      return input;
    }

    return UtilsService.capitalize(input);
  }
}
