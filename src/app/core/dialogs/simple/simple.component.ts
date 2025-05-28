import { Component, Input } from '@angular/core';

import { SafeHtml }    from '@angular/platform-browser';
import { DialogSizes } from '../../models/constants/dialogs';

@Component({
  selector   : 'app-simple-dialog',
  templateUrl: './simple.component.html',
  styleUrls  : ['./simple.component.scss']
})
export class SimpleDialogComponent {
  @Input() isOpen = false;

  @Input() title                      = '';
  @Input() message: string | SafeHtml = '';
  @Input() size: DialogSizes          = DialogSizes.Medium;

  constructor() {
  }
}
