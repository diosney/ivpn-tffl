import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import JsBarcode from 'jsbarcode';

@Component({
  selector   : 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls  : ['./barcode.component.scss']
})
export class BarcodeComponent implements OnChanges, AfterViewInit {
  @Input() text: string = 'Test';

  @Input() options? = {
    format      : 'CODE128',
    background  : 'transparent',
    displayValue: false,
    height      : 20,
    margin      : 0,
    width       : 1
  };

  @ViewChild('element', { read: ElementRef }) element: { nativeElement: any; } | undefined;

  constructor() {
  }

  ngAfterViewInit() {
    JsBarcode(this.element!.nativeElement, this.text, this.options);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.element) {
      return;
    }

    let newText      = this.text;
    let newOptions   = this.options;
    let shouldRender = false;

    if (changes['text'] && changes['text'].currentValue !== changes['text'].previousValue) {
      newText      = changes['text'].currentValue;
      shouldRender = true;
    }
    if (changes['options']
        && JSON.stringify(changes['options'].currentValue) !== JSON.stringify(changes['options'].previousValue)) {

      newOptions   = changes['options'].currentValue;
      shouldRender = true;
    }

    if (shouldRender) {
      JsBarcode(this.element.nativeElement, newText, newOptions);
    }
  }
}
