import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landing-faq',
  templateUrl: './faq.component.html',
  styleUrls  : ['./faq.component.scss'],
  providers  : []
})
export class LandingFaqComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  constructor(public merchantSettingsService: SettingsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
