import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector     : 'app-landsay-includes',
  templateUrl  : './includes.component.html',
  styleUrls    : [
    '../../../../../node_modules/slick-carousel/slick/slick.scss',
    '../../../../../node_modules/slick-carousel/slick/slick-theme.scss',

    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/css/materialdesignicons.min.css',
    '../../../../assets/scss/style.scss',

    './includes.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  providers    : []
})
export class LandsayLayoutIncludesComponent implements OnInit,
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

let x = {
  size: 10, // qty of items being returned.
  page: 3  // page 3

  // sorting
  // oaginating
  // ordering
  // filtering
}

let res  = {

}
