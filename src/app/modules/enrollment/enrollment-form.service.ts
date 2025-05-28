import { Injectable } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Injectable()
export class EnrollmentFormService {
  public form: FormGroup;

  public fieldNamesMap;
  public initialData;

  constructor(private formBuilder: FormBuilder) {
    this.fieldNamesMap = {
      cardNumber: 'cardNumber',
      driverPin : 'driverPin',
      vehicleId : 'vehicleId',
      odometer  : 'odometer',
      amount    : 'amount',
      gallons   : 'gallons'
    };

    this.initialData = {
      [this.fieldNamesMap.cardNumber]: '6394712250003002',
      [this.fieldNamesMap.driverPin] : '',
      [this.fieldNamesMap.vehicleId] : '',
      [this.fieldNamesMap.odometer]  : '',
      [this.fieldNamesMap.amount]    : '',
      [this.fieldNamesMap.gallons]   : ''
    };

    this.form = this.formBuilder.group({
      [this.fieldNamesMap.cardNumber]: [this.initialData[this.fieldNamesMap.cardNumber], [Validators.required]],
      [this.fieldNamesMap.driverPin] : [this.initialData[this.fieldNamesMap.driverPin], [Validators.required]],
      [this.fieldNamesMap.vehicleId] : [this.initialData[this.fieldNamesMap.vehicleId], [Validators.required]],
      [this.fieldNamesMap.vehicleId] : [this.initialData[this.fieldNamesMap.vehicleId], [Validators.required]],
      [this.fieldNamesMap.odometer]  : [this.initialData[this.fieldNamesMap.odometer], [Validators.required]],
      [this.fieldNamesMap.amount]    : [this.initialData[this.fieldNamesMap.amount], [Validators.required]],
      [this.fieldNamesMap.gallons]   : [this.initialData[this.fieldNamesMap.gallons], [Validators.required]]
    });
  }
}
