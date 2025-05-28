import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';
import { ErrorNames }   from '../../constants/errors';

import { GenericMapById } from '../../interfaces/generic';

export class AwsNewPasswordRequiredError extends Error {
  override name    = ErrorNames.AwsNewPasswordRequired;
  override message = _t('A new password is requested for the user.');
  code             = ErrorNames.AwsNewPasswordRequired;

  constructor(public authData: any) {

    // 'Error' breaks prototype chain here.
    super(ErrorNames.AwsNewPasswordRequired);

    // Fixing the break.
    Object.setPrototypeOf(this, AwsNewPasswordRequiredError.prototype);

    this.authData = authData;
  }

  toJSON(): GenericMapById<string> {
    let objectToStringify: GenericMapById<string> = {};

    [
      'code',
      'message'
    ].forEach((field) => {
      if ((this as any)[field]) {
        objectToStringify[field] = (this as any)[field];
      }
    });

    return objectToStringify;
  }
}
