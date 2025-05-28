import { MerchantSettings } from '../interfaces/merchant-settings';
import { ivpnSettings } from '@core/models/constants/settings/ivpn';

export const DEFAULT_MERCHANT_SUBDOMAIN = 'ivpn';

export const OVERRIDE_SETTINGS_FOR_TEST                  = true;
export const DEFAULT_MERCHANT_SETTINGS: MerchantSettings = ivpnSettings;

export const STATIC_SETTINGS = [
  DEFAULT_MERCHANT_SETTINGS,

  // TODO: Remove when integration with API gets done.
  ivpnSettings
];
