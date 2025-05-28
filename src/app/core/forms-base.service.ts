import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import merge from 'lodash.merge';

import { ErrorMessagesService } from './error-messages.service';

@Injectable()
export class FormsBaseService<T> {
  public form: FormGroup = this.formBuilder.group({});

  public defaultValues: T | {} = {};
  public initialValues: Partial<T> | undefined;

  get values(): T {
    return this.getValues() as T;
  }

  constructor(protected formBuilder: FormBuilder,
              protected errorMessagesService: ErrorMessagesService) {
  }

  init(values?: Partial<T> | undefined) {
    this.initialValues = this.defaultValues;
    this.reset(values || undefined);
  }

  reset(values: Partial<T> | undefined = {}) {
    let newValues = {};
    merge(newValues, this.defaultValues, values);

    this.form.reset(newValues);
  }

  getSingleErrorMessageByName(field: string | string[]): string {
    return this.errorMessagesService.getSingleErrorMessage(this.getFieldControl(field));
  }

  getFieldValue<T = string>(field: string | string[]): T {
    return JSON.parse(JSON.stringify(this.getFieldControl(field)?.value));
  }

  getFieldControl(field: string | string[]): AbstractControl<any> | null {
    return this.form.get(field);
  }

  getValues(): Partial<T> {
    return JSON.parse(JSON.stringify(this.form.value));
  }
}
