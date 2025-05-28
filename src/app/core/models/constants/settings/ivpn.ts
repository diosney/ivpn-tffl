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
      appHeaderLinkColor      : '#bf0a30',
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
      appFooterColor          : '#114ea3',
      appFooterHoverColor     : '#bf0a30'
    }
  },
  fixtures : {
    drivers   : [
      {
        phoneNumber: '(404) 555-1234'
      },
      {
        phoneNumber: '(404) 555 - 5678'
      },
      {
        phoneNumber: '(404) 555 - 2345'
      },
      {
        phoneNumber: '(404) 555 - 3456'
      },
      {
        phoneNumber: '(404) 555 - 4567'
      }
    ],
    cards     : [
      {
        driverPhoneNumber: '(404) 555-1234',
        store            : 'RaceTrac, 132 Forest Pkwy, Forest Park, GA, 30297',
        vehicleId        : 'CGS3324'
      },
      {
        driverPhoneNumber: '(404) 555 - 5678',
        store            : 'RaceTrac, 120 Piedmont Ave NE, Atlanta, GA, 30303',
        vehicleId        : 'TAA6246'
      },
      {
        driverPhoneNumber: '(404) 555 - 2345',
        store            : 'RaceTrac, 3356 Lawrenceville Hwy, Tucker, GA, 30084',
        vehicleId        : 'BGX7655'
      },
      {
        driverPhoneNumber: '(404) 555 - 3456',
        store            : 'RaceTrac, 2550 Spring Rd SE, Smyrna, GA, 30080',
        vehicleId        : 'EJB7298'
      },
      {
        driverPhoneNumber: '(404) 555 - 4567',
        store            : 'RaceTrac, 2429 Bolton Rd NW, Atlanta, GA, 30318',
        vehicleId        : 'CLD4318'
      }
    ],
    enrollment: {
      step1: {
        isReviewTermsEnabled       : true,
        isProofOfLegalStatusEnabled: true,
        isValidationFEINEnabled    : true
      },
      step2: {
        emailVerificationCode: '191385',
        phoneVerificationCode: '617193',
        firstName            : 'Rick',
        middleName           : 'D.',
        lastName             : 'Fields',
        email                : 'rickf@ricksplumbing.com',
        phone                : '(404) 525-2156',
        dob                  : '03/05/1958',
        ssn                  : '055-22-2833'
      },
      step3: {
        businessName          : 'Rick\'s Plumbing LLC',
        dba                   : 'Rick\'s Plumbing',
        address               : {
          street : '1400 Northside Dr NW',
          city   : 'Atlanta',
          state  : 'GA',
          zipcode: '30318'
        },
        email                 : 'info@ricksplumbing.com',
        phone                 : '(404) 214-5704',
        fein                  : '22-1234567',
        feinState             : 'GA',
        incorporationState    : 'GA',
        dunn                  : '15-048-3782',
        businessSinceMonths   : '2',
        businessSinceYears    : '2023',
        industry              : '238220',
        businessStructure     : 'llc',
        annualGrossRevenue    : '$1,240,000',
        averageMonthlyExpenses: '$825.60',
        averageWeeklyExpenses : '$192.00',
        emailVerificationCode : '420417',
        phoneVerificationCode : '308165'
      },
      step4: {
        bankName          : 'First Horizon Bank',
        months            : '10',
        years             : '2',
        bank              : {
          address1: 'Buckhead Branch',
          city    : 'Atlanta',
          state   : 'GA',
          zipcode : '30305'
        },
        contact           : {
          name : 'Fred Williams',
          title: 'Business Development Manager',
          phone: '404-240-5000'
        },
        businessName      : 'Rick\'s Plumbing and Heating, LLC',
        routing           : '082001687',
        account           : '0112209474',
        isBusinessChecking: true,
        isBankInfoIsOk    : true
      }
    }
  }
};
