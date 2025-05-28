import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { RoutingRelatedService } from '../../../core/routing-related.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector   : 'app-landsay-landing-layout',
  templateUrl: './landing.component.html',
  styleUrls  : ['./landing.component.scss']
})
export class LandsayLandingLayoutComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  isAtLandingHomePage = false;
  isAtLandingLoginPage = false;

  constructor(private routingRelatedService: RoutingRelatedService) {
  }

  ngOnInit() {
    this
      .routingRelatedService
      .isAtLandingHomePage$
      .pipe(takeWhile(() => this.allowSubscriptions))
      .subscribe((isAtLandingHomePage) => {
        this.isAtLandingHomePage = isAtLandingHomePage;
      });

    this
      .routingRelatedService
      .isAtLandingLoginPage$
      .pipe(takeWhile(() => this.allowSubscriptions))
      .subscribe((isAtLandingLoginPage) => {
        this.isAtLandingLoginPage = isAtLandingLoginPage;
      });
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
