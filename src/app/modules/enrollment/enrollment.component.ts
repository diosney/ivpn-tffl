import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  ClrForm,
  ClrLoadingState,
  ClrTimelineLayout,
  ClrTimelineStepState
} from '@clr/angular';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { ErrorMessagesService } from '@core/error-messages.service';
import { AlertTypes } from '@core/models/constants/alerts';
import { SettingsService } from '@core/settings.service';
import { EnrollmentFormService } from './enrollment-form.service';
import {
  USA_STATES
} from '@core/models/constants/usa';

enum TimelineSteps {
  LegalInfo       = 'legal-info',
  PersonalAccount = 'personal-account',
  BusinessDetails = 'business-details',
  BankAndBilling  = 'bank-and-billing',
  Conclusion      = 'conclusion',
}

@Component({
  selector   : 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls  : ['./enrollment.component.scss'],
  providers  : [
    EnrollmentFormService
  ]
})
export class EnrollmentComponent implements OnInit,
  OnDestroy {

  @ViewChild(ClrForm, { static: true }) clrForm: any;

  private allowSubscriptions = true;

  isLogging       = false;
  shouldShowAlert = false;
  alertMessage    = '';
  alertType       = AlertTypes.Danger;

  ClrLoadingState      = ClrLoadingState;
  ClrTimelineLayout    = ClrTimelineLayout;
  ClrTimelineStepState = ClrTimelineStepState;

  TimelineSteps       = TimelineSteps;
  // currentTimelineStep = TimelineSteps.BankAndBilling;
  currentTimelineStep = TimelineSteps.LegalInfo;

  AlertTypes = AlertTypes;

  formStaticValues = this.settingsService.data?.fixtures?.enrollment;

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 920px)');

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private translateService: TranslateService,
              private breakpointObserver: BreakpointObserver,
              public settingsService: SettingsService,
              public enrollmentFormService: EnrollmentFormService,
              public errorMessagesService: ErrorMessagesService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }

  getTimelineStatusFromCurrent(step: TimelineSteps): ClrTimelineStepState {
    if (step === TimelineSteps.LegalInfo) {
      return (this.currentTimelineStep === TimelineSteps.LegalInfo)
             ? ClrTimelineStepState.CURRENT
             : ClrTimelineStepState.SUCCESS;
    }
    else if (step === TimelineSteps.PersonalAccount) {
      if (this.currentTimelineStep === TimelineSteps.LegalInfo) {
        return ClrTimelineStepState.NOT_STARTED;
      }
      else if (this.currentTimelineStep === TimelineSteps.PersonalAccount) {
        return ClrTimelineStepState.CURRENT;
      }
      else {
        return ClrTimelineStepState.SUCCESS;
      }
    }
    else if (step === TimelineSteps.BusinessDetails) {
      if (this.currentTimelineStep === TimelineSteps.LegalInfo
          || this.currentTimelineStep === TimelineSteps.PersonalAccount) {
        return ClrTimelineStepState.NOT_STARTED;
      }
      else if (this.currentTimelineStep === TimelineSteps.BusinessDetails) {
        return ClrTimelineStepState.CURRENT;
      }
      else {
        return ClrTimelineStepState.SUCCESS;
      }
    }
    else if (step === TimelineSteps.BankAndBilling) {
      if (this.currentTimelineStep === TimelineSteps.LegalInfo
          || this.currentTimelineStep === TimelineSteps.PersonalAccount
          || this.currentTimelineStep === TimelineSteps.BusinessDetails) {
        return ClrTimelineStepState.NOT_STARTED;
      }
      else if (this.currentTimelineStep === TimelineSteps.BankAndBilling) {
        return ClrTimelineStepState.CURRENT;
      }
      else {
        return ClrTimelineStepState.SUCCESS;
      }
    }
    else if (step === TimelineSteps.Conclusion) {
      if (this.currentTimelineStep !== TimelineSteps.Conclusion) {
        return ClrTimelineStepState.NOT_STARTED;
      }
      else {
        return ClrTimelineStepState.CURRENT;
      }
    }
    else {
      return ClrTimelineStepState.NOT_STARTED;
    }
  }

  onNextFrom(fromStep: TimelineSteps) {
    switch (fromStep) {
      case TimelineSteps.LegalInfo:
        this.currentTimelineStep = TimelineSteps.PersonalAccount;
        break;

      case TimelineSteps.PersonalAccount:
        this.currentTimelineStep = TimelineSteps.BusinessDetails;
        break;

      case TimelineSteps.BusinessDetails:
        this.currentTimelineStep = TimelineSteps.BankAndBilling;
        break;

      case TimelineSteps.BankAndBilling:
        this.currentTimelineStep = TimelineSteps.Conclusion;
        break;

      case TimelineSteps.Conclusion:
        this.currentTimelineStep = TimelineSteps.Conclusion;
        break;

      default:
        // Noop.
        break;
    }
  }

  noop() {
  }

  async login() {
    this.clrForm.markAsTouched();

    if (this.enrollmentFormService.form.invalid) {
      this.shouldShowAlert = true;
      this.alertMessage    = this.translateService.instant(ErrorMessagesService.getSingleErrorFromList(ErrorMessagesService.errorsList['invalidForm'].code).message);
      return;
    }

    this.shouldShowAlert = false;
    const formValue      = this.enrollmentFormService.form.value;
    this.isLogging       = true;
    this.enrollmentFormService.form.disable();

    // const email: string    = formValue[this.driverFormService.fieldNamesMap.email];
    // const password: string = formValue[this.driverFormService.fieldNamesMap.password];
    //
    // try {
    //   let user: User = await this.authService.signIn(
    //     email.toLowerCase(),
    //     password,
    //     false);
    //
    //   switch (user.status) {
    //     case UserStatuses.Disabled:
    //       this.alertMessage    = this.translateService.instant(_t('Your account has been disabled. Contact the site managers.'));
    //       this.shouldShowAlert = true;
    //       this.authService.signOut();
    //       break;
    //     case UserStatuses.Active:
    //     default: {
    //       let defaultRoute = environment.uris.client.defaultRoutes[UtilsService.convertFromDashRoleToLowerPascalCase(user.role)];
    //       console.log('xxx 3', defaultRoute)
    //
    //       // this.router.navigate([defaultRoute]);
    //       // TODO: update make url dynamic
    //       this.router.navigate(['/merchant']);
    //       break;
    //     }
    //   }
    // }
    // catch (error) {
    //   switch ((error as Error).name) {
    //     case ErrorNames.AwsNewPasswordRequired:
    //       this.router.navigate(['/auth/set-password']);
    //       break;
    //     case ErrorNames.PasswordResetRequiredException:
    //       await this.authService.sendForgotPasswordMessageAndSaveEmail(email);
    //       this.router.navigate(['/auth/reset-password']);
    //       break;
    //     default:
    //       let appError         = this.errorMessagesService.getAppErrorFromAnyError(error as any);
    //       this.alertMessage    = appError.message;
    //       this.shouldShowAlert = true;
    //       break;
    //   }
    //
    // }
    // finally {
    //   this.isLogging = false;
    //   this.driverFormService.form.enable();
    // }
  }

  protected readonly USA_STATES            = USA_STATES;
}
