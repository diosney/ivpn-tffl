import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { SettingsService } from '@core/settings.service';

@Component({
  selector   : 'app-landsay-landing-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls  : ['./footer.component.scss']
})
export class LandsayLandingLayoutFooterComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  year = (new Date().getFullYear());

  constructor(private renderer: Renderer2,
              public merchantSettingsService: SettingsService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }

  topFunction() {
    document.body.scrollTop            = 0;
    document.documentElement.scrollTop = 0;
  }
}
