import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';

import { TrueFalseToYesNoDataMap } from '@core/models/constants/generic';

@Pipe({
  name: 'humanizedTrueFalseToYesNo'
})
export class HumanizedTrueFalseToYesNoPipe implements PipeTransform {
  transform(input: string | boolean | undefined, useNo = false): string {
    if (typeof input === 'undefined' || !useNo && !input) {
      return _t('-');
    }

    return (TrueFalseToYesNoDataMap[String(input)])
           ? TrueFalseToYesNoDataMap[String(input)].text
           : _t('-');
  }
}
