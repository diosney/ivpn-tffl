import { Component } from '@angular/core';

import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landsay-widget-faq',
  templateUrl: './faq.component.html',
  styleUrls  : ['./faq.component.scss']
})
export class LandsayWidgetFaqComponent {
  constructor(public merchantSettingsService: SettingsService) {
  }
}
