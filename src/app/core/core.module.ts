import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SimpleDialogComponent } from './dialogs/simple/simple.component';
import { I18nService } from './i18n.service';
import { LoaderService } from './loader.service';
import { ErrorMessagesService } from './error-messages.service';
import { UtilsService } from './utils.service';
import { SettingsService } from './settings.service';
import { SettingsBySubdomainResolve } from './resolves/settings-by-subdomain-resolve.service';
import { WindowService } from './window.service';
import { RoutingRelatedService } from './routing-related.service';
import { SharedModule } from '@shared/shared.module';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClarityModule,

    TranslateModule.forRoot({
      // defaultLanguage: SupportedLanguages.English,
      loader : {
        provide   : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps      : [HttpClient]
      },
      isolate: false
    }),
    SharedModule
  ],
  providers   : [
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: HttpHeadersInterceptor,
    //   multi   : true
    // },
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: TokenHttpInterceptor,
    //   multi   : true
    // },
    UtilsService,
    ErrorMessagesService,
    I18nService,
    LoaderService,
    SettingsService,
    SettingsBySubdomainResolve,
    WindowService,
    RoutingRelatedService,
  ],
  declarations: [
    // JsonApiErrorsDialogComponent,
    SimpleDialogComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule,
              private i18nService: I18nService) {

    UtilsService.throwIfAlreadyLoadedModuleGuard(parentModule as NgModule, 'CoreModule');

    i18nService.init();
  }
}
