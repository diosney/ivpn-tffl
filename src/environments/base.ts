import { ENVIRONMENTS } from '@core/models/constants/environments';
import { Environment } from '@core/models/interfaces/environments';

export function getDefaultEnvConfigFromBaseUrl(apiBaseUrl: string): Environment {
  return {
    production : false,
    environment: ENVIRONMENTS.Development,
    debug      : {
      routes     : false,
      showVersion: false
    },
    uris       : {
      client  : {
        login        : '/auth/login',
        defaultRoutes: {}
      },
      server  : {
        base: apiBaseUrl,
      },
      external: {}
    },
    keys       : {
      aws: {}
    }
  };
}
