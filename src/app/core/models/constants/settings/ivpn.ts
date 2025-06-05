import { MerchantSettings } from '../../interfaces/merchant-settings';

export const ivpnSettings: MerchantSettings = {
  id       : 'ivpn',
  dba      : 'iVPN',
  subDomain: 'ivpn',
  ui       : {
    landing: {
      bsPrimary  : '#bf0a30',
      bsSecondary: '#114ea3',

      bsLinkColorRgb     : '17, 78, 163',
      bsLinkHoverColorRgb: '68, 116, 182',

      appListIconColor: '#114ea3',

      appBtnPrimaryBackground : '#bf0a30',
      appBtnPrimaryBorderColor: '#bf0a30',

      appBtnPrimaryHoverBackground    : '#bf0a30',
      appBtnPrimaryHoverBorderColor   : '#bf0a30',
      appBtnPrimaryHoverBoxShadowColor: 'rgba(204,64,94,0.76)',

      appBtnPrimaryFocusBackground    : '#bf0a30',
      appBtnPrimaryFocusBorderColor   : '#bf0a30',
      appBtnPrimaryFocusBoxShadowColor: 'rgba(204,64,94,0.76)',

      appBtnPrimaryActiveBackground    : '#bf0a30',
      appBtnPrimaryActiveBorderColor   : '#bf0a30',
      appBtnPrimaryActiveBoxShadowColor: 'rgba(204,64,94,0.76)',

      appBtnSecondaryBackground : '#114ea3',
      appBtnSecondaryBorderColor: '#114ea3',

      appBtnSecondaryHoverBackground    : '#114ea3',
      appBtnSecondaryHoverBorderColor   : '#114ea3',
      appBtnSecondaryHoverBoxShadowColor: 'rgba(17, 78, 163,0.76)',

      appBtnSecondaryFocusBackground    : '#114ea3',
      appBtnSecondaryFocusBorderColor   : '#114ea3',
      appBtnSecondaryFocusBoxShadowColor: 'rgba(17, 78, 163,0.76)',

      appBtnSecondaryActiveBackground    : '#114ea3',
      appBtnSecondaryActiveBorderColor   : '#114ea3',
      appBtnSecondaryActiveBoxShadowColor: 'rgba(17, 78, 163,0.76)',

      appBtnOutlinePrimaryColor      : '#bf0a30',
      appBtnOutlinePrimaryBorderColor: '#bf0a30',

      appBtnOutlinePrimaryHoverBackground    : '#bf0a30',
      appBtnOutlinePrimaryHoverBoxShadowColor: 'rgba(227, 96, 104, 0.6)',

      appBtnOutlinePrimaryFocusBackgroundColor: '#bf0a30',
      appBtnOutlinePrimaryFocusBoxShadowColor : 'rgba(227, 96, 104, 0.6)',

      appBtnOutlinePrimaryActiveBackground    : '#bf0a30',
      appBtnOutlinePrimaryActiveBoxShadowColor: 'rgba(227, 96, 104, 0.6)',

      appFormControlFocusBorderColor: '#114ea3',

      appHeaderLogoUrl        : '/assets/images/merchants/ivpn/logo-landing.png',
      appHeaderLinkColor      : '#114ea3',
      appHeaderLinkHoverColor : '#bf0a30',
      appHeaderLinkActiveColor: '#bf0a30',

      appSocialIconHoverColor      : '#bf0a30',
      appSocialIconHoverBorderColor: '#bf0a30',

      appBackToTopHoverBackgroundColor: '#bf0a30',

      appTextPrimaryColor: '#114ea3',

      appHomePrimarySectionBackgroundColor: 'transparent',
      appHomeCardImageUrl                 : '/assets/images/merchants/ivpn/card.png',
      appHomeGasStationImageUrl           : '/assets/images/merchants/ivpn/below-price-circle-image.png',

      appFeatureIconBackgroundColor: 'rgba(184,83,83,0.2)',
      appFeatureIconColor          : '#bf0a30',

      appTimelineBubbleBackgroundColor    : '#bf0a30',
      appTimelineBubbleHoverBoxShadowColor: 'rgba(204,64,94,0.76)',

      appCharacteristicsCheckmarkImageUrl: '/assets/images/merchants/ivpn/checkmark.png',
      appCharacteristicsColor            : '#ffffff',
      appCharacteristicsBackground       : '#bf0a30',
      appCharacteristicsHoverBackground  : '#114ea3',

      appSocialLinkTwitterUrl  : 'https://twitter.com/ivpn',
      appSocialLinkInstagramUrl: 'https://www.instagram.com/ivpn/',
      appSocialLinkFacebookUrl : 'https://www.facebook.com/ivpn/',

      appWidgetPriceCircleBorderColor    : '#bf0a30',
      appWidgetPriceCircleBackgroundColor: 'rgba(221, 121, 121, 0.2)',
      appWidgetPriceCircleMidTextColor   : '#bf0a30',

      appFooterBackgroundColor: '',
      appFooterColor          : '#ffffff',
      appFooterHoverColor     : '#bf0a30'
    }
  },
  fixtures : {
    enrollment: {
      step1: {
        email   : '',
        password: ''
      },
      step2: {
        code: ''
      },
      step3: {
        firstName         : '',
        lastName          : '',
        gender            : '',
        dob               : {
          month: '',
          day  : '',
          year : ''
        },
        pin               : '',
        address           : {
          address1: '',
          address2: '',
          city    : '',
          state   : '',
          zipcode : ''
        },
        phone             : '',
        ssn               : '',
        driverLicense     : '',
        driverLicenseState: '',
        agreeToConditions : false
      }
    }
  }
};
