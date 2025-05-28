import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class WindowService {
  constructor(private router: Router) {
  }

  public static redirect(path: string) {
    window.location.href = path;
  }

  public openInNewTab(commands: string) {
    const url = this.router.serializeUrl(this.router.createUrlTree([ commands ]));
    window.open(url, '_blank');
  }
}
