import { inject } from '@angular/core';
import {
  ResolveFn,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantsApiService } from '@core/api/merchants.service';
import { Merchant } from '@core/models/interfaces/bln-system/merchant';
import { map } from 'rxjs/operators';

export const merchantResolver: ResolveFn<Observable<Merchant | null>> = (route, state) => {
  const router              = inject(Router);
  const merchantsApiService = inject(MerchantsApiService);
  const schemaName          = route.paramMap.get('merchantSchemaName') ?? '';
  const dba                 = route.paramMap.get('merchantDba') ?? '';

  return merchantsApiService
    .getMerchantByDbaName(schemaName, dba)
    .pipe(map(res => {
      // TODO: Remove `res.error` condition after new API is done.
      if (res.data.merchant && !res.error) {
        return res.data;
      }

      router.navigate(['/admin/merchants']);
      return null;
    }));
};
