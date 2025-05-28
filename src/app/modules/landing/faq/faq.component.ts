import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector   : 'app-landing-faq',
  templateUrl: './faq.component.html',
  styleUrls  : ['./faq.component.scss'],
  providers  : []
})
export class LandingFaqComponent implements OnInit,
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
