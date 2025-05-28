import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import {
  ApiStandardError,
  AwsErrorFromAmplify,
  AwsErrorFromNetwork,
  ErrorGlob
} from './models/interfaces/errors';

import { UtilsService } from './utils.service';
import {
  IError,
  IErrorMap
} from './models/interfaces/error.class';
import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';
import { ApiError } from '@core/models/interfaces/api';

@Injectable()
export class ErrorMessagesService {
  // Some example AWS messages that are not yet coded into the map.
  // Registered here for i18n purposes if later it is needed.
  //
  // {"__type":"CodeDeliveryFailureException","message":"Amazon SES account is in Sandbox. Verify Send-to email address or Amazon SES Account"}
  // {"__type":"InvalidParameterException","message":"Attributes did not conform to the schema: password: Attribute does not exist in the schema.\n"}
  // {"__type":"InvalidParameterException","message":"Invalid phone number format."}
  // {"__type":"InvalidParameterException","message":"Cannot reset password for the user as there is no registered/verified email or phone_number"}// {"__type":"CodeMismatchException","message":"Invalid verification code provided, please try again."}
  // {"__type":"NotAuthorizedException","message":"User cannot be confirmed. Current status is CONFIRMED"}
  // {"__type":"UnexpectedLambdaException","message":"arn:aws:lambda:us-east-1:955978575775:function:ve-authentication-service-dev-preSignUp failed with error AccessDeniedException."}
  static errorsList: IErrorMap = {
    notAuthorizedException        : {
      code     : 'NotAuthorizedException',
      message  : 'Incorrect username or password.',
      overrides: {
        'Incorrect username or password.': 'Incorrect email address or password.'
      }
    },
    userNotFoundException         : {
      code     : 'UserNotFoundException',
      message  : 'User does not exist.',
      overrides: {
        'User does not exist.': 'Incorrect email address or password.'
      }
    },
    usernameExistsException       : {
      code   : 'UsernameExistsException',
      message: _t('An account with the given email already exists.')
    },
    userNotConfirmedException     : {
      code   : 'UserNotConfirmedException',
      message: _t('You have to confirm your email address.')
    },
    passwordResetRequiredException: {
      code   : 'PasswordResetRequiredException',
      message: _t('Password reset required for the user.')
    },
    invalidForm                   : {
      code   : 'InvalidForm',
      message: _t('The form has invalid values.')
    },
    formValuesDidntChanged        : {
      code   : 'FormValuesDidntChanged',
      message: _t('The form values haven\'t changed.')
    },
    '400'                         : {
      code   : '400',
      message: _t('Error at the request, some parameters are invalid.')
    },
    '401'                         : {
      code   : '401',
      message: _t('You have not signed in.')
    },
    '403'                         : {
      code   : '403',
      message: _t('You are not allowed to use the requested resource.')
    },
    '404'                         : {
      code   : '404',
      message: _t('The requested resource was not found.')
    },
    '422'                         : {
      code   : '422',
      message: _t('Invalid request.')
    },
    '500'                         : {
      code   : '500',
      message: _t('Server error, contact service manager.')
    }
  };

  constructor(private translateService: TranslateService) {
  }

  static getSingleErrorFromList(optErrorCode: string | number, errorMessage?: string): IError {
    const errorCode = optErrorCode.toString();

    let error = ErrorMessagesService.errorsList[errorCode[0].toLowerCase() + errorCode.substr(1)];

    if (errorMessage && error && error.overrides && error.overrides[errorMessage]) {
      error.message = error.overrides[errorMessage];
      delete error.overrides;

      return error;
    }

    return error;
  }

  getInvalidFormErrorMessage(): string {
    return this.translateService.instant(ErrorMessagesService.getSingleErrorFromList(ErrorMessagesService.errorsList['invalidForm'].code).message);
  }

  getSingleErrorMessage(control: AbstractControl | null): string {
    let message       = '';
    const params: any = {};

    const controlName: string | null = control
                                       ? UtilsService.getControlName(control)
                                       : null;

    if (!control || !controlName) {
      return _t('Unknown error, contact support.');
    }

    if (control.hasError('required')) {
      message = _t('This field is required.');
    }
    else if (control.hasError('email')) {
      message = _t('Not a valid email address.');
    }
    else if (control.hasError('strong')) {
      const error = control.getError('strong');
      message     = _t(
        '8 Characters or longer. At least one number, an uppercase and a lowercase letter. Example: JohnDoe5 shows a minimum of 8 characters and number combination.');
    }
    else if (control.hasError('matchOther')) {
      const error = control.getError('matchOther');

      let otherField    = UtilsService.camelCaseToSentenceCase(error.otherField).trim();
      message           = `\"${otherField}\" & \"Confirm ${otherField}\" must match.`;
      params.otherField = error.otherField;
    }
    else if (control.hasError('minlength')) {
      const error = control.getError('minlength');

      message = _t('The required length is {{requiredLength}} and actual length is {{actualLength}}.');

      params.requiredLength = error.requiredLength;
      params.actualLength   = error.actualLength;
    }
    else if (control.hasError('maxlength')) {
      const error = control.getError('maxlength');
      message     = _t('The required length is {{requiredLength}} and actual length is {{actualLength}}.');

      params.requiredLength = error.requiredLength;
      params.actualLength   = error.actualLength;
    }
    else if (control.hasError('min')) {
      const error = control.getError('min');
      message     = _t('The minimum value must be {{min}} and actual value is {{actual}}.');

      params.min    = error.min;
      params.actual = error.actual;
    }
    else if (control.hasError('max')) {
      const error = control.getError('max');
      message     = _t('The maximum value must be {{max}} and actual value is {{actual}}.');

      params.max    = error.max;
      params.actual = error.actual;
    }
    else if (control.hasError('wrongIvpnPriorityCard')) {
      const error = control.getError('wrongIvpnPriorityCard');
      message     = error.message || _t('Card cannot be used as a priority card.');

      params.max    = error.max;
      params.actual = error.actual;
    }
    else if (control.hasError('totalAmountMustSumCustomerAndMerchantAmounts')) {
      message = _t(`Total must equal Customer Amount plus Participant Amount Fees.`);
    }
    else if (control.hasError('oneOfPayToMerchantOrMerchantAmountOrBothMustBeZero')) {
      message = _t(`Pay To Participant or Participant Amount or both must be zero.`);
    }
    else if (control.hasError('isRequiredIfParticipantAmountOrPayToParticipantAreSet')) {
      message = _t(`The field is required if Pay To Participant or Participant Amount are not zero, is Charity or Gift Expired Amount is for Participant.`);
    }
    else if (control.hasError('pattern')) {
      const error = control.getError('pattern');

      switch (controlName) {
        case 'phone_number':
        case 'phoneNumber':
        case 'newPhone':
        case 'fax':
        case 'fax_number': {
          message = _t('Phone number is in a wrong format.');
          break;
        }
        case 'pin':
        case 'custom:pin':
        case 'newPin':
        case 'confirmPin': {
          message = _t('PIN in wrong format. Expecting a 4-digit number.');
          break;
        }
        case 'zip':
        case 'custom:zip':
        case 'zipCode':
        case 'zipcode': {
          message = _t('ZIP in wrong format. Expecting 00000 or 00000-0000.');
          break;
        }
        case 'code': {
          message = _t('Code is in wrong format. Expecting a 6-digit number.');
          break;
        }
        case 'webSite':
        case 'website': {
          message = _t('URL is in wrong format. Expecting a valid URL.');
          break;
        }
        case 'subDomain':
        case 'subdomain': {
          message = _t('Subdomain is in wrong format. A valid word is required and no spaces are allowed.');
          break;
        }
        case 'cardNumber': {
          message = _t('Not a valid card number.');
          break;
        }
        case 'startDate':
        case 'endDate':
        case 'birthDate':
        case 'date': {
          message = _t('Not a valid date.');
          break;
        }
        case 'from':
        case 'to': {
          message = _t('Not a valid card number.');
          break;
        }
        case 'routingNumber': {
          message = _t('Routing number in wrong format. Expecting a 9-digit number.');
          break;
        }
        case 'accountNumber': {
          message = _t('Account number in wrong format. Expecting a number of 5-17 digits.');
          break;
        }
        default: {
          // Color-related fields.
          if (controlName.toLowerCase().endsWith('color')
              || controlName.toLowerCase().endsWith('colorrgb')) {

            message = _t('Not a valid CSS color value.');
            break;
          }
          // URL-related fields.
          if (controlName.toLowerCase().endsWith('url')) {
            message = _t('URL is in wrong format. Expecting a valid URL.');
            break;
          }

          message                = _t('Has to match with {{requiredPattern}} pattern.');
          params.requiredPattern = error.requiredPattern;
          break;
        }
      }
    }

    return this.translateService.instant(message, params);
  }

  getAppErrorFromAnyError(inputError: ErrorGlob): ApiStandardError {
    let apiError: ApiStandardError = {
      id     : '',
      message: ''
    };

    // Simple strings errors.
    if (typeof inputError === 'string') {
      if (ErrorMessagesService.getSingleErrorFromList(inputError)) {
        apiError.message = ErrorMessagesService.getSingleErrorFromList(inputError).message;
      }
      else {
        apiError.message = inputError;
      }
    }
    // AWS errors.
    else if (inputError.hasOwnProperty('__type')
             && inputError.hasOwnProperty('message')) {

      if (ErrorMessagesService.getSingleErrorFromList((inputError as AwsErrorFromNetwork).__type)) {
        let foundError = ErrorMessagesService.getSingleErrorFromList((inputError as AwsErrorFromNetwork).__type, (inputError as ApiStandardError).message);

        apiError.id      = foundError.code;
        apiError.message = foundError.message;
      }
      else {
        apiError.message = (inputError as ApiStandardError).message;
      }
    }
    // Amplify errors.
    else if (inputError.hasOwnProperty('code')
             && inputError.hasOwnProperty('message')) {

      if (ErrorMessagesService.getSingleErrorFromList((inputError as AwsErrorFromAmplify).code, (inputError as ApiStandardError).message)) {
        let foundError = ErrorMessagesService.getSingleErrorFromList((inputError as AwsErrorFromAmplify).code);

        apiError.id      = foundError.code;
        apiError.message = foundError.message;
      }
      else {
        apiError.message = (inputError as ApiStandardError).message;
      }
    }
    else if (inputError.hasOwnProperty('ID')
             && inputError.hasOwnProperty('Message')) {

      if (ErrorMessagesService.getSingleErrorFromList((inputError as ApiError).ID, (inputError as ApiError).Message)) {
        let foundError = ErrorMessagesService.getSingleErrorFromList((inputError as ApiError).ID);

        apiError.id      = foundError.code;
        apiError.message = foundError.message;
      }
      else {
        apiError.message = (inputError as ApiError).Message;
      }
    }
    else if (inputError.hasOwnProperty('status')) {
      const statusCode = (inputError as HttpErrorResponse).status.toString();

      if (statusCode === ErrorMessagesService.getSingleErrorFromList('400').code) {
        let foundError = ErrorMessagesService.getSingleErrorFromList(statusCode);

        apiError.id      = foundError.code;
        apiError.message = foundError.message;

        if ((inputError as HttpErrorResponse).error && (inputError as HttpErrorResponse).error.error) {
          let newError = this.getAppErrorFromAnyError((inputError as HttpErrorResponse).error.error);

          apiError.id      = newError.id;
          apiError.message = newError.message;
        }
      }
      else if (statusCode === ErrorMessagesService.getSingleErrorFromList('404').code
               || statusCode === ErrorMessagesService.getSingleErrorFromList('500').code) {

        let foundError = ErrorMessagesService.getSingleErrorFromList(statusCode);

        apiError.id      = foundError.code;
        apiError.message = foundError.message;
      }
      else if (inputError.hasOwnProperty('message')) {
        apiError.message = (inputError as ApiStandardError).message;
      }
      else {
        apiError.message = this.translateService.instant('Error not know by service: {{error}}', {
          error: inputError
        });
      }
    }
    else if (inputError.hasOwnProperty('message')) {
      apiError.message = (inputError as ApiStandardError).message;
    }
    else {
      apiError.message = this.translateService.instant('Unknown error.');
      console.log('Error not shown by service:', inputError);
    }

    apiError.message = this.translateService.instant(apiError.message);
    return apiError;
  }
}
