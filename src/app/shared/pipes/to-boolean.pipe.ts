import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'toBoolean'
})
export class ToBooleanPipe implements PipeTransform {
  // Needed in certain providers.
  static transform(input?: any): boolean {
    if (input === 'false') {
      return false;
    }

    return !!input;
  }

  transform = ToBooleanPipe.transform.bind(this);
}
