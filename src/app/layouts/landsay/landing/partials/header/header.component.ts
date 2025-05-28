import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { SettingsService } from '@core/settings.service';
import { SupportedLanguagesList } from '@core/models/constants/i18n';
import { takeWhile } from 'rxjs/operators';
import {
  LangChangeEvent,
  TranslateService
} from '@ngx-translate/core';
import { I18nService } from '@core/i18n.service';

@Component({
  selector   : 'app-landsay-landing-layout-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class LandsayLandingLayoutHeaderComponent implements OnInit,
  OnDestroy {

  private allowSubscriptions = true;
  curentsection: any         = 'home';

  SupportedLanguagesList = SupportedLanguagesList;
  currentLanguage        = this.translateService.currentLang;

  constructor(private renderer: Renderer2,
              private i18nService: I18nService,
              private translateService: TranslateService,
              public merchantSettingsService: SettingsService) {
  }

  ngOnInit(): void {
    const preloaderElement = document.getElementById('preloader');

    if (preloaderElement) {
      this.renderer.removeClass(preloaderElement, 'd-none');
    }

    setTimeout(() => {
      this.renderer.addClass(preloaderElement, 'd-none');
    }, 1000);

    this.translateService
        .onLangChange
        .pipe(takeWhile(() => this.allowSubscriptions))
        .subscribe((event: LangChangeEvent) => {
          this.translateService
              .use(event.lang)
              .subscribe(() => {
                this.currentLanguage = event.lang;
              });
        });
  }

  ngOnDestroy() {
    this.allowSubscriptions = false;
  }

  onSectionChange(event: any) {
    this.curentsection = event;
  }

  windowScroll() {
    const navbar = document.getElementById('navbar');

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'block';
    }
    else {
      navbar?.classList.remove('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'none';
    }
  }

  toggleMenu() {
    document.getElementById('navbarSupportedContent')!.classList.toggle('show');
  }

  closeMenu() {
    document.getElementById('navbarSupportedContent')!.classList.remove('show');
  }

  changeLanguage(languageId: string) {
    this.i18nService.setLanguage(languageId);
  }
}
