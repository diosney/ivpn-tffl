export const E164_PHONE_REGEX        = /^\+[1-9]\d{10}$/;
export const VERIFICATION_CODE_REGEX = /^\d{6}$/;
export const DATE_REGEX              = /^\d{2}\/\d{2}\/\d{4}$/;
export const PIN_REGEX               = /^\d{4}$/;
export const LAST_4_SSN_REGEX        = /^\d{4}$/;
export const US_ZIPCODES_REGEX       = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
export const URL_REGEX               = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
export const URL_FULL_REGEX          = /(?:https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)|data:[\w/+.-]+;base64,[a-zA-Z0-9+/=]+(?:={0,2}))/;
export const DURATION_REGEX          = /^P(?:\d+(?:\.\d+)?Y)?(?:\d+(?:\.\d+)?M)?(?:\d+(?:\.\d+)?W)?(?:\d+(?:\.\d+)?D)?(?:T(?:\d+(?:\.\d+)?H)?(?:\d+(?:\.\d+)?M)?(?:\d+(?:\.\d+)?S)?)?$/;
export const SUBDOMAIN_REGEX         = /^[a-zA-Z0-9](?:[a-zA-Z0-9-_]{0,61}[a-zA-Z0-9])?$/;

export const IVPN_PHYSICAL_CARD_ID_REGEX          = /^(639471(500|501)\d{7})$|^(56444800(\d{10}|\d{11}))$/;
export const IVPN_PHYSICAL_CARD_AND_PACK_ID_REGEX = /^(639471(500|501|225)\d{7})$|^(56444800(\d{10}|\d{11}))$|^(SN9\d{8})$/;
export const IVPN_PHYSICAL_PACK_ID_REGEX          = /^SN9\d{8}$/;
export const CARD_RANGE_REGEX                     = /^\d{15,19}$/;

export const ROUTING_NUMBER_REGEX = /^\d{9}$/;
export const ACCOUNT_NUMBER_REGEX = /^\d{5,17}$/;

export const CSS_COLOR_REGEX    = /^(?:[a-zA-Z]+|#[0-9a-fA-F]{3,4}(?:[0-9a-fA-F]{3,4})?|rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(?:0?\.\d+|1(?:\.0)?|\d{1,3}%?)\s*\)|rgb\(\s*\d{1,3}\s+\d{1,3}\s+\d{1,3}(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|hsl\(\s*\d{1,3}(?:deg|grad|rad|turn)?\s+\d{1,3}%\s+\d{1,3}%(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|hwb\(\s*\d{1,3}(?:deg|grad|rad|turn)?\s+\d{1,3}%\s+\d{1,3}%(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|lab\(\s*\d{1,3}%\s+[-+]?\d+(?:\.\d+)?\s+[-+]?\d+(?:\.\d+)?(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|lch\(\s*\d{1,3}%\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|oklab\(\s*\d{1,3}%\s+[-+]?\d+(?:\.\d+)?\s+[-+]?\d+(?:\.\d+)?(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|oklch\(\s*\d{1,3}%\s+\d+(?:\.\d+)?\s+\d+(?:\.\d+)?(?:\s*\/\s*(?:\d{1,3}%?|0?\.\d+|1(?:\.0)?))?\s*\)|(hsl|hwb|lch)\(from\s+[a-zA-Z]+\s+.*\)|light-dark\(\s*[^,]+,\s*[^)]+\))$/i;
export const BS_COLOR_RGB_REGEX = /^(25[0-5]|2[0-4]\d|1?\d{1,2}), (25[0-5]|2[0-4]\d|1?\d{1,2}), (25[0-5]|2[0-4]\d|1?\d{1,2})$/;
