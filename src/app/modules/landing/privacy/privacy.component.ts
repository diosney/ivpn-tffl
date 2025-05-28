import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landing-privacy',
  templateUrl: './privacy.component.html',
  styleUrls  : ['./privacy.component.scss'],
  providers  : []
})
export class LandingPrivacyComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  constructor(public settingsService: SettingsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
