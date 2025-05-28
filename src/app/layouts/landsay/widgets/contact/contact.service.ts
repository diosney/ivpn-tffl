import { Injectable } from '@angular/core';

import {
  FormBuilder,
  Validators
} from '@angular/forms';

import {
  COMMENTS_FIELD_MAX_LENGTH,
  REGULAR_TEXT_FIELD_MAX_LENGTH
} from '@core/models/constants/forms';
import { FormsBaseService } from '@core/forms-base.service';
import { ErrorMessagesService } from '@core/error-messages.service';

@Injectable()
export class ContactFormService extends FormsBaseService<any> {
  override defaultValues = {
    name   : '',
    subject: '',
    message: ''
  };

  override form = this.formBuilder.group({
    name   : [
      this.defaultValues.name,
      [Validators.required, Validators.maxLength(REGULAR_TEXT_FIELD_MAX_LENGTH)]
    ],
    subject: [
      this.defaultValues.subject,
      [Validators.required, Validators.maxLength(REGULAR_TEXT_FIELD_MAX_LENGTH)]
    ],
    message: [
      this.defaultValues.message,
      [Validators.required, Validators.maxLength(COMMENTS_FIELD_MAX_LENGTH)]
    ]
  });

  constructor(protected override formBuilder: FormBuilder,
              protected override errorMessagesService: ErrorMessagesService) {

    super(formBuilder, errorMessagesService);
  }
}
