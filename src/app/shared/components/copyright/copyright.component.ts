import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector   : 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls  : ['./copyright.component.scss']
})
export class CopyrightComponent {
  year    = (new Date()).getFullYear();
  version = 'v1.0.1-dev';
  showVersion = environment.debug.showVersion

  constructor() {
  }
}
