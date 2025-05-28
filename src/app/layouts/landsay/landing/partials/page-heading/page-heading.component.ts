import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { RoutingRelatedService } from '../../../../../core/routing-related.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector   : 'app-landsay-landing-layout-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls  : ['./page-heading.component.scss']
})
export class LandsayLandingLayoutPageHeadingComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  pageTitle = '';

  constructor(private routingRelatedService: RoutingRelatedService) {
  }

  ngOnInit() {
    this
      .routingRelatedService
      .pageTitle$
      .pipe(takeWhile(() => this.allowSubscriptions))
      .subscribe((pageTitle) => {
        this.pageTitle = pageTitle;
      });
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
