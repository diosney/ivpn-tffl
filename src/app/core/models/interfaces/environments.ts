import { ENVIRONMENTS } from '../constants/environments';

export interface Environment {
  production: boolean;
  environment: ENVIRONMENTS;
  debug: {
    routes: boolean;
    showVersion: boolean;
  };
  uris: {
    client: {
      login: string;
      defaultRoutes: {
        [index: string]: string;
      };
    },
    server: {
      base: string;
    };
    external: {};
  };
  keys: {
    aws: {},
  };
}
