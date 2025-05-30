import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { SettingsService } from '@core/settings.service';
import { USA_STATES } from '@core/models/constants/usa';
import { Router } from '@angular/router';

const Steps = {
  AccountInfo : 0,
  Verify      : 1,
  PersonalInfo: 2,
  Confirmation: 3
};

@Component({
  selector   : 'app-landing-enroll',
  templateUrl: './enroll.component.html',
  styleUrls  : [
    './enroll.component.scss'
  ],
  providers  : []
})
export class LandingEnrollComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  Steps       = Steps;
  currentStep = Steps.AccountInfo;

  formStaticValues = this.settingsService.data?.fixtures?.enrollment;
  USA_STATES       = USA_STATES;
  months           = Array.from({ length: 12 }, (_, i) => i + 1);
  days             = Array.from({ length: 31 }, (_, i) => i + 1);
  years            = Array.from({ length: 20 }, (_, i) => 1990 - i);

  constructor(private settingsService: SettingsService,
              private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }

  prev() {
    this.currentStep -= 1;
    // this.changeContent();
  }

  next() {
    this.currentStep += 1;
    // this.changeContent();
  }

  finish() {
    this.router.navigate(['/']);
  }
}
