import merge from 'lodash.merge';

import { ENVIRONMENTS } from '@core/models/constants/environments';
import { Environment } from '@core/models/interfaces/environments';
import { getDefaultEnvConfigFromBaseUrl } from './base';

const apiBaseUrl = 'https://xpsmwg0mfi.execute-api.us-east-1.amazonaws.com/Prod';

export const environment: Environment = merge(getDefaultEnvConfigFromBaseUrl(apiBaseUrl), {
  production : true,
  environment: ENVIRONMENTS.Production,
  debug      : {
    routes: false
  },
  uris       : {
    external: {}
  }
});
