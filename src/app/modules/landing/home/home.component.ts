import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landing-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  providers  : []
})
export class LandingHomeComponent implements OnInit,
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
