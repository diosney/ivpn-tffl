import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoutingRelatedService {
  //TODO: Refactor to be a global data$ instead of separated fields?

  readonly pageTitle$: BehaviorSubject<string>            = new BehaviorSubject<string>('');
  readonly isAtLandingHomePage$: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);
  readonly isAtLandingLoginPage$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get pageTitle(): string {
    return this.pageTitle$.value;
  }

  set pageTitle(pageTitle: string) {
    this.pageTitle$.next(pageTitle || '');
  }

  get isAtLandingHomePage(): boolean {
    return this.isAtLandingHomePage$.value;
  }

  set isAtLandingHomePage(isAtLandingHomePage: boolean) {
    this.isAtLandingHomePage$.next(isAtLandingHomePage);
  }

  get isAtLandingLoginPage(): boolean {
    return this.isAtLandingLoginPage$.value || false;
  }

  set isAtLandingLoginPage(isAtLandingLoginPage: boolean) {
    this.isAtLandingLoginPage$.next(isAtLandingLoginPage);
  }

  constructor() {
  }
}
