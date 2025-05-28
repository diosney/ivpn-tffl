import { UiConfig } from '@core/models/interfaces/bln-system/merchant';

export interface MerchantSettings {
  id: string;
  dba: string;
  subDomain: string;

  ui?: UiConfig;
  fixtures?: {
    drivers: Array<{
      phoneNumber: string;
    }>;
    cards: Array<{
      driverPhoneNumber: string;
      store?: string;
      vehicleId?: string;
    }>;
    enrollment?: {
      step1: {
        isReviewTermsEnabled: boolean;
        isProofOfLegalStatusEnabled: boolean;
        isValidationFEINEnabled: boolean;
      },
      step2: {
        emailVerificationCode: string;
        phoneVerificationCode: string;
        firstName: string;
        middleName: string;
        lastName: string;
        email: string;
        phone: string;
        dob: string;
        ssn: string;
        password?: string;
        confirmPassword?:string;
        address?: {
          street: string;
          city: string;
          state: string;
          zipcode: string;
        };
      },
      step3: {
        businessName: string;
        dba: string;
        address: {
          street: string;
          street2?: string;
          city: string;
          state: string;
          zipcode: string;
        },
        email: string;
        phone: string;
        fein: string;
        feinState: string;
        incorporationState: string;
        dunn: string;
        businessSinceMonths: string;
        businessSinceYears: string;
        industry: string;
        businessStructure: string;
        annualGrossRevenue: string;
        averageMonthlyExpenses: string;
        averageWeeklyExpenses: string;
        emailVerificationCode: string;
        phoneVerificationCode: string;
      },
      step4: {
        bankName: string;
        months: string;
        years: string;
        bank: {
          address1: string;
          address2?: string;
          city: string;
          state: string;
          zipcode: string;
        },
        contact: {
          name: string;
          title: string;
          phone: string;
        },
        businessName: string;
        routing: string;
        account: string;
        isBusinessChecking: boolean;
        isMobilePhone?: boolean;
        isBankInfoIsOk: boolean;
      }
    }
  };
}

export interface UiConfigLanding {
  [index: string]: string;

  // Main colors.
  bsPrimary: string;
  bsSecondary: string;

  // Links.
  bsLinkColorRgb: string;
  bsLinkHoverColorRgb: string;

  // Texts.
  appTextPrimaryColor: string;

  // List icon.
  appListIconColor: string;

  // Btn Primary.
  appBtnPrimaryBackground: string;
  appBtnPrimaryBorderColor: string;

  appBtnPrimaryHoverBackground: string;
  appBtnPrimaryHoverBorderColor: string;
  appBtnPrimaryHoverBoxShadowColor: string;

  appBtnPrimaryFocusBackground: string;
  appBtnPrimaryFocusBorderColor: string;
  appBtnPrimaryFocusBoxShadowColor: string;

  appBtnPrimaryActiveBackground: string;
  appBtnPrimaryActiveBorderColor: string;
  appBtnPrimaryActiveBoxShadowColor: string;

  // Btn Secondary.
  appBtnSecondaryBackground: string;
  appBtnSecondaryBorderColor: string;

  appBtnSecondaryHoverBackground: string;
  appBtnSecondaryHoverBorderColor: string;
  appBtnSecondaryHoverBoxShadowColor: string;

  appBtnSecondaryFocusBackground: string;
  appBtnSecondaryFocusBorderColor: string;
  appBtnSecondaryFocusBoxShadowColor: string;

  appBtnSecondaryActiveBackground: string;
  appBtnSecondaryActiveBorderColor: string;
  appBtnSecondaryActiveBoxShadowColor: string;

  // Btn Outline Primary.
  appBtnOutlinePrimaryColor: string;
  appBtnOutlinePrimaryBorderColor: string;

  appBtnOutlinePrimaryHoverBackground: string;
  appBtnOutlinePrimaryHoverBoxShadowColor: string;

  appBtnOutlinePrimaryFocusBackgroundColor: string;
  appBtnOutlinePrimaryFocusBoxShadowColor: string;

  appBtnOutlinePrimaryActiveBackground: string;
  appBtnOutlinePrimaryActiveBoxShadowColor: string;

  // Forms.
  appFormControlFocusBorderColor: string;

  // Header Section
  appHeaderLogoUrl: string;

  appHeaderLinkColor: string;
  appHeaderLinkHoverColor: string;
  appHeaderLinkActiveColor: string;

  // TODO
  // appHeaderSecondaryButtonBackgroundColor: string;
  // appHeaderSecondaryButtonColor: string;
  // appHeaderSecondaryButtonBorderColor: string;

  // Home Main Section.
  appHomePrimarySectionBackgroundColor: string;
  appHomeCardImageUrl: string;
  appHomeGasStationImageUrl: string;

  // Feature Section.
  appFeatureIconBackgroundColor: string;
  appFeatureIconColor: string;

  // Timeline Section.
  appTimelineBubbleBackgroundColor: string;
  appTimelineBubbleHoverBoxShadowColor: string;

  // Characteristics Section.
  appCharacteristicsCheckmarkImageUrl: string;
  appCharacteristicsColor: string;
  appCharacteristicsBackground: string;
  appCharacteristicsHoverBackground: string;

  // Social Links.
  appSocialLinkTwitterUrl: string;
  appSocialLinkInstagramUrl: string;
  appSocialLinkFacebookUrl: string;

  // Widgets.
  appWidgetPriceCircleBorderColor: string;
  appWidgetPriceCircleBackgroundColor: string;
  appWidgetPriceCircleMidTextColor: string;

  // Footer.
  appBackToTopHoverBackgroundColor: string;
  appFooterBackgroundColor: string;
  appFooterColor: string;
  appFooterHoverColor: string;

  // Social Icons.
  appSocialIconHoverColor: string;
  appSocialIconHoverBorderColor: string;
}
