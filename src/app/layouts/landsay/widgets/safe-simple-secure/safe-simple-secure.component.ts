import { Component } from '@angular/core';
import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landsay-widget-safe-simple-secure',
  templateUrl: './safe-simple-secure.component.html',
  styleUrls  : ['./safe-simple-secure.component.scss']
})
export class LandsayWidgetSafeSimpleSecureComponent {
  constructor(public merchantSettingsService: SettingsService) {
  }
}
