import {
  Component,
  Input
} from '@angular/core';
import { AccordionPanelComponent } from 'ngx-bootstrap/accordion/accordion-group.component';

@Component({
  selector   : 'app-landsay-page-accordion-indicator-icon',
  templateUrl: './accordion-indicator-icon.component.html',
  styleUrls  : ['./accordion-indicator-icon.component.scss']
})
export class LandsayPageAccordionIndicatorIconComponent {
  @Input() accordionRef: AccordionPanelComponent | undefined;

  constructor() {
  }
}
