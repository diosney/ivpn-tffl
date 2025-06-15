import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { SettingsService } from '@core/settings.service';
import { UtilsService } from '@core/utils.service';

@Component({
  selector   : 'app-landing-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  providers  : []
})
export class LandingHomeComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  constructor(public utilsService: UtilsService,
              public settingsService: SettingsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
