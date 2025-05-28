import {
  UiConfigLanding
} from '@core/models/interfaces/merchant-settings';

export interface NormalizedMerchantSchemaData {
  merchant: MerchantSchemaData & {
    merchant_id: string;
  };
}

export interface MerchantSchemaData {
  fleet_merchant_id: number;
  merchant_name: string;
  dba: string;
  schema_name: string;
  // "2025-01-22"
  created_date: string;
}

export interface Merchant {
  schema_name: string;

  merchant: MerchantMainData;
  address: Address;
  contact: Contact;
  web_ui_config: WebUiConfig;
}

export interface WebUiConfig {
  web_ui_config_id: number;
  ui_config: UiConfig | any;
}

export interface MerchantMainData {
  // `0` if is root merchant.
  parent_merchant_id: number;

  merchant_id: number;
  merchant_name: string;
  dba: string;
  subdomain: string;

  is_active: boolean;

  email: string;
  // +16016564343
  phone_number: string;
  fax_number: string;

  number_of_locations: number;
  website: string;
  closed_loop: boolean;

  debit_fee: number;
  merchant_thanks_info: string;

  // '2025-01-16T18:59:20.387524'
  created_date: string;
  // '2025-02-17T15:32:15.194717'
  updated_date: string;
}

export interface Address {
  address_id?: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface Contact {
  contact_id?: number;
  contact_name: string;
  email: string;
  // '+19548717601'
  phone_number: string;
  title: string;
}

export interface UiConfig {
  landing?: UiConfigLanding;
}
