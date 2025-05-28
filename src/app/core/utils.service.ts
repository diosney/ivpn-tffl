import {
  Injectable,
  NgModule
} from '@angular/core';

import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Decimal } from 'decimal.js';
import isEqualWith from 'lodash.isequalwith';
import isEqual from 'lodash.isequal';
import mergeWith from 'lodash.mergewith';
import * as moment from 'moment';

@Injectable()
export class UtilsService {

  static throwIfAlreadyLoadedModuleGuard(parentModule: NgModule, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  // See https://stackoverflow.com/a/4149393/881286.
  static camelCaseToSentenceCase(input: string = ''): string {
    return input.replace(/([A-Z])/g, ' $1')
      // Uppercase the first character.
      // tslint:disable-next-line:only-arrow-functions
                .replace(/^./, function (str) {
                  return str.toUpperCase();
                });
  }

  static camelCaseToCssVariableName(input: string = ''): string {
    return '--' + UtilsService
      .camelCaseToSentenceCase(input)
      .toLowerCase()
      .replace(/\s/g, '-');
  }

  static getControlName(control: AbstractControl): string | null {
    const formGroup = control.parent?.controls;

    if (!formGroup) {
      return null;
    }

    return Object
             .keys(formGroup)
             .find((name: string) => {
               return control === (formGroup as { [key: string]: AbstractControl<any, any>; })[name];
             }) || null;
  }

  static scrambleEmail(email: string): string {
    const splittedByAt: string[] = email.split('@');
    const splittedDot: string[]  = email.split('.');

    const lastDomain: string = (splittedDot.length > 1)
                               ? '.' + splittedDot[splittedDot.length - 1]
                               : '';

    return splittedByAt[0][0] + '***@' + splittedByAt[1][0] + '***' + lastDomain;
  }

  static scrollToTop() {
    const position = document.body.scrollTop || document.documentElement.scrollTop;
    let scrollAnimationTimeout: any;

    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimationTimeout = setTimeout(() => {
        UtilsService.scrollToTop();
      }, 30);
    }
    else {
      clearTimeout(scrollAnimationTimeout);
    }
  }

  static capitalize(input: string): string {
    return input
      .split(' ')
      .map((item) => {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
      })
      .join(' ');
  }

  static convertFromDashRoleToLowerPascalCase(input: string): string {
    if (!input) {
      return '';
    }

    return input
      .split('-')
      .map((word, index) => {
        return (index === 0)
               ? word
               : (word[0].toUpperCase() + word.slice(1).toLowerCase());
      })
      .join('');
  }

  constructor(private router: Router) {
  }

  goTo($event: MouseEvent, route: any) {
    $event.stopPropagation();

    this.router.navigate(route);
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 && o2 && o1.id === o2.id;
  }

  isToday(date: string): boolean {
    return moment(date).local()
                       .isSame(moment().local(), 'day');
  }

  sumStrings(...args: string[]): string {
    let sum = new Decimal(0);

    args.forEach((item) => {
      sum = sum.add(item);
    });

    return sum.toFixed(2);
  }

  static maskCardNumberMiddleChars(input: string, maskingChar = '*'): string {
    const start        = input.slice(0, 4);
    const end          = input.slice(-4);
    const maskedLength = input.length - 8;
    const masked       = maskingChar.repeat(maskedLength);

    return `${start}${masked}${end}`;
  }

  static jsonStringifyAndEncode(input: any): string {
    const json = JSON.stringify(input);
    return btoa(json);
  }

  static jsonParseAndDecode(input: string): any {
    const decoded = atob(input);
    return JSON.parse(decoded);
  }

  static clone(input: any): any {
    return JSON.parse(JSON.stringify(input));
  }
}
