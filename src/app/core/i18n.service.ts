import {
  Inject,
  Injectable
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LOCAL_STORAGE,
  StorageService
} from 'ngx-webstorage-service';

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SupportedLanguages
} from './models/constants/i18n';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class I18nService {
  readonly language$ = new BehaviorSubject<string>(DEFAULT_LANGUAGE);

  get language(): string {
    return this.language$.value;
  }

  constructor(private translateService: TranslateService,
              @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  init() {
    this.translateService.addLangs([
      SupportedLanguages.English,
      SupportedLanguages.Spanish
    ]);

    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    const browserCultureLang = this.translateService.getBrowserCultureLang() || DEFAULT_LANGUAGE;

    let languageToUse: string = this.storage.get(LANGUAGE_STORAGE_KEY);

    if (!languageToUse) {
      languageToUse = (Object.values(SupportedLanguages).includes(browserCultureLang as SupportedLanguages))
                      ? browserCultureLang
                      : DEFAULT_LANGUAGE;
    }

    this.setLanguage(languageToUse);

    // this.translateService.onLangChange
    //     .subscribe((event: TranslationChangeEvent) => this.storage.set(LANGUAGE_STORAGE_KEY, event.lang));
  }

  setLanguage(languageId: string) {
    this.translateService.use(languageId)
        .subscribe(() => {
        });

    this.storage.set(LANGUAGE_STORAGE_KEY, languageId);
    this.language$.next(languageId);
  }
}
