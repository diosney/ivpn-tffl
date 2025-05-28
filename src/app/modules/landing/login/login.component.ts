import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { SettingsService } from '@core/settings.service';
import { ENVIRONMENTS } from '@core/models/constants/environments';
import { environment } from '../../../../environments/environment';

@Component({
  selector   : 'app-landing-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.scss'],
  providers  : []
})
export class LandingLoginComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  get fleetDashboardUrl(): string {
    let url = `https://ricksplumbing-${this.merchantSettingsService.data?.subDomain}{env}.myapprovedfleet.com/#/fleet/dashboard`;

    url = (environment.environment !== ENVIRONMENTS.Production)
          ? url.replace('{env}', `-${environment.environment}`)
          : url.replace('{env}', '');

    return url;
  };

  constructor(private merchantSettingsService: SettingsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
