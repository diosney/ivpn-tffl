import merge from 'lodash.merge';

import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

import {
  from,
  Observable,
  of
} from 'rxjs';
import { map } from 'rxjs/operators';

import { SettingsService } from '../settings.service';

import {
  DEFAULT_MERCHANT_SETTINGS,
  DEFAULT_MERCHANT_SUBDOMAIN,
  OVERRIDE_SETTINGS_FOR_TEST,
  STATIC_SETTINGS
} from '../models/constants/merchant';

import { MerchantSettings } from '../models/interfaces/merchant-settings';
import { WindowService } from '../window.service';

@Injectable()
export class SettingsBySubdomainResolve implements Resolve<any> {
  constructor(private settingsService: SettingsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let envIds = [
      'dev',
      'prod',
      'uat',
      'qa'
    ];

    if (window.location.host.search('localhost') !== -1) {
      // Search default merchant settings from API.
      return this
        .getMerchantBySubdomain(DEFAULT_MERCHANT_SUBDOMAIN)
        .pipe(map((res) => {
          let uiFilteredData = {};

          Object
            .keys(res.data.data.ui)
            .forEach((key) => {
              if (res.data.data.ui[key] !== '' && res.data.data.ui[key] !== null) {
                (uiFilteredData as any)[key] = res.data.data.ui[key];
              }
            });

          if (Object.keys(uiFilteredData).length > 0) {
            res.data.data.ui = uiFilteredData;
          }
          else {
            delete res.data.data.ui;
          }

          let newData: Partial<MerchantSettings> = {};
          merge(newData, DEFAULT_MERCHANT_SETTINGS, res.data.data);

          if (OVERRIDE_SETTINGS_FOR_TEST) {
            newData = DEFAULT_MERCHANT_SETTINGS;
          }

          return this.settingsService.setData(newData as MerchantSettings);
        }));
    }

    let splittedHost = window.location.host.split('.');

    // Check for `example.com`.
    if (splittedHost.length <= 2) {
      let newMerchantUrl = `https://${DEFAULT_MERCHANT_SETTINGS.subDomain}.${window.location.host}`;
      WindowService.redirect(newMerchantUrl);
      return of(undefined);
    }

    let fullSubDomain = splittedHost[splittedHost.length - 3];

    // Ex: dev.example.com
    // if (envIds.indexOf(`-${fullSubDomain}`) !== -1) {
    //   let noMerchantUrl = `https://${fullSubDomain}-${DEFAULT_MERCHANT_SETTINGS.subDomain}.${splittedHost.slice(splittedHost.length - 2)
    //                                                                                                      .join('.')}`;
    //
    //   console.log(3, 'noMerchantUrl',noMerchantUrl);
    //   WindowService.redirect(noMerchantUrl);
    //   return of(undefined);
    // }

    // test.myapprovedfleet.com             1
    // test-dev.myapprovedfleet.com         2
    // ricks-test.myapprovedfleet.com       2
    // ricks-test-dev.myapprovedfleet.com   3
    //
    // Default value.
    let subDomain          = DEFAULT_MERCHANT_SUBDOMAIN;
    let splitFullSubDomain = fullSubDomain.split('-');

    switch (splitFullSubDomain.length) {
      case 1:
        // Ex: merchant.example.com
        subDomain = fullSubDomain;
        break;

      case 2:
        // Ex: test-dev.example.com
        // Ex: ricks-test.example.com
        subDomain = (envIds.indexOf(splitFullSubDomain[1]) !== -1)
                    ? splitFullSubDomain[0]  // Case: test-dev.example.com
                    : splitFullSubDomain[1]; // Case: ricks-test.myapprovedfleet.com
        break;

      case 3:
        // Ex: business-merchant-dev.example.com
        subDomain = splitFullSubDomain[1];
        break;

      default:
        //  Noop.
        break;
    }

    let foundSettings = STATIC_SETTINGS.find((item) => item.subDomain === subDomain);

    if (!foundSettings) {
      foundSettings = DEFAULT_MERCHANT_SETTINGS;
    }

    let newData = Object.assign({}, foundSettings);
    this.settingsService.setData(newData);

    return of(undefined);

    // // Found subdomain, set settings.
    // // Search merchant settings according subdomain.
    // // If not merchant is found in the API, redirect to the default one.
    // return this
    //   .getMerchantBySubdomain(subDomain)
    //   .pipe(map((res) => {
    //     let foundSettings = STATIC_SETTINGS.find((item) => item.subDomain === subDomain);
    //
    //     if (!foundSettings) {
    //       foundSettings = DEFAULT_MERCHANT_SETTINGS;
    //     }
    //
    //     let newData = Object.assign({}, foundSettings, res.data.data);
    //     return this.settingsService.setData(newData);
    //   }));
  }

  getMerchantBySubdomain(subdomain: string): Observable<any> {
    return of({
      data: {
        data: DEFAULT_MERCHANT_SETTINGS
      }
    });
  }
}
