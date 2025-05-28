import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  ActivationEnd,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';

import { takeWhile } from 'rxjs/operators';

import { LoaderService } from '@core/loader.service';
import { RoutingRelatedService } from '@core/routing-related.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private allowSubscriptions = true;
  isTopLoaderVisible         = false;

  constructor(private router: Router,
              private loaderService: LoaderService,
              private routingRelatedService: RoutingRelatedService) {

    // Intended: Do not move to `ngOnInit`.
    this.router
        .events
        .pipe(takeWhile(() => this.allowSubscriptions))
        .subscribe((event) => {
          this.navigationInterceptor(event as RouterEvent);

          if (event instanceof NavigationEnd) {
            this.routingRelatedService.isAtLandingHomePage = (event.url === '/' || event.url === '');
            this.routingRelatedService.isAtLandingLoginPage = (event.url === '/login');
          }
          if (event instanceof ActivationEnd) {
            if ('pageTitle' in event.snapshot.data) {
              this.routingRelatedService.pageTitle = event.snapshot.data['pageTitle'];
            }
          }
        });

    this.loaderService
        .isTopLoaderVisible$
        .pipe(takeWhile(() => this.allowSubscriptions))
        .subscribe(isTopLoaderVisible => this.isTopLoaderVisible = isTopLoaderVisible);
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loaderService.setDestinationUrl(event.url);
      this.loaderService.enableTopLoader();
    }
    if (event instanceof NavigationEnd) {
      this.loaderService.clearDestinationUrl();
      this.loaderService.disableTopLoader();
    }
    if (event instanceof NavigationCancel) {
      this.loaderService.clearDestinationUrl();
      this.loaderService.disableTopLoader();
    }
    if (event instanceof NavigationError) {
      this.loaderService.clearDestinationUrl();
      this.loaderService.disableTopLoader();
    }
  }
}
