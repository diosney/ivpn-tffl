// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '@core/models/interfaces/environments';
import { getDefaultEnvConfigFromBaseUrl } from './base';

// const apiBaseUrl     = 'https://3dr2zs6iq5.execute-api.us-east-1.amazonaws.com/Stage';
// const apiBaseUrl     = 'https://9pvlvtpddi.execute-api.us-east-1.amazonaws.com/Stage';
const apiBaseUrl     = 'https://xpsmwg0mfi.execute-api.us-east-1.amazonaws.com/Prod';
//
export const environment: Environment = getDefaultEnvConfigFromBaseUrl(apiBaseUrl);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
