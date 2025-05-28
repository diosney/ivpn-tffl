import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';

import { GenericDataMapType } from '../interfaces/generic';

export enum TrueFalse {
  True  = 'true',
  False = 'false'
}

export const TrueFalseToYesNoDataMap: GenericDataMapType = {
  [TrueFalse.True] : {
    id  : TrueFalse.True,
    text: _t('Yes')
  },
  [TrueFalse.False]: {
    id  : TrueFalse.False,
    text: _t('No')
  }
};
