import {
  Inject,
  Injectable
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  DEFAULT_MERCHANT_SETTINGS,
  DEFAULT_MERCHANT_SUBDOMAIN
} from './models/constants/merchant';
import { MerchantSettings } from './models/interfaces/merchant-settings';
import { DOCUMENT } from '@angular/common';
import { UtilsService } from './utils.service';

@Injectable()
export class SettingsService {
  readonly data$ = new BehaviorSubject<MerchantSettings | null>(DEFAULT_MERCHANT_SETTINGS);

  get isDefaultMerchant(): boolean {
    return !!this.data && (this.data.subDomain === DEFAULT_MERCHANT_SUBDOMAIN);
  }

  get data(): MerchantSettings | null {
    return this.data$.value;
  }

  get themeStylesElement() {
    return this.document.getElementById('theme')?.style!;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  setData(merchantSettings: MerchantSettings | null) {
    // Saving the styles.
    this.data$.next(merchantSettings);

    // Setting the global styles.
    this.setCssRootVariablesFromObject(merchantSettings?.ui?.landing);
  }

  setCssRootVariablesFromObject(container?: { [index: string]: string }) {
    if (container) {
      Object
        .keys(container)
        .forEach((key: string) => {
          const value = container[key];

          if (typeof value === 'string' && value.trim() !== '') {
            const fieldName = UtilsService.camelCaseToCssVariableName(key);
            this.themeStylesElement.setProperty(fieldName, value);
          }
          else {
            // TODO: Later checks for arrays when added?
          }
        });
    }
  }
}
