import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  readonly isTopLoaderVisible$ = new BehaviorSubject<boolean>(false);
  readonly destinationUrl$     = new BehaviorSubject<string>('');

  constructor() {
  }

  setTopLoaderStatus(enable: boolean) {
    this.isTopLoaderVisible$.next(enable);
  }

  enableTopLoader() {
    this.setTopLoaderStatus(true);
  }

  disableTopLoader() {
    this.setTopLoaderStatus(false);
  }

  setDestinationUrl(url: string) {
    this.destinationUrl$.next(url);
  }

  clearDestinationUrl() {
    this.destinationUrl$.next('');
  }

  doesDestinationUrlStartsWith(parent: string): boolean {
    const searcher = new RegExp(`^${this.destinationUrl$.getValue()}`);
    return parent.search(searcher) !== -1;
  }
}
