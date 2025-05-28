import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector   : 'app-landing-terms',
  templateUrl: './terms.component.html',
  styleUrls  : ['./terms.component.scss'],
  providers  : []
})
export class LandingTermsComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }
}
