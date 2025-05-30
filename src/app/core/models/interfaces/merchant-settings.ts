import { UiConfig } from '@core/models/interfaces/bln-system/merchant';

export interface MerchantSettings {
  id: string;
  dba: string;
  subDomain: string;

  ui?: UiConfig;
  fixtures?: {
    enrollment: {
      step1: {
        email: string;
        password: string;
      },
      step2: {
        code: string;
      },
      step3: {
        firstName: string;
        lastName: string;
        gender: string;
        dob: {
          month: string;
          day: string;
          year: string;
        };
        pin: string;
        address: {
          address1: string;
          address2: string;
          city: string;
          state: string;
          zipcode: string;
        };
        phone: string;
        ssn: string;
        driverLicense: string;
        driverLicenseState: string;
        agreeToConditions: boolean;
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
