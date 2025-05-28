import 'brace';
import 'brace/mode/html';
import 'brace/theme/tomorrow';

import { HttpClient } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IMaskModule } from 'angular-imask';
import { NgPipesModule } from 'ngx-pipes';

import {
  ACE_CONFIG,
  AceConfigInterface,
  AceModule
} from 'ngx-ace-wrapper';

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { DisableAutofillDirective } from './directives/disable-autofill.directive';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MaskPipe } from './pipes/mask.pipe';
import { HumanizedTrueFalseToYesNoPipe } from './pipes/truefalse-to-yesno.pipe';
import { ScrollSpyDirective } from './directives/scrollspy.directive';
import { DefaultsToDashPipe } from '@shared/pipes/novalue-to-dash.pipe';
import { ToStringPipe } from '@shared/pipes/to-string.pipe';
import { ToBooleanPipe } from '@shared/pipes/to-boolean.pipe';
import { CodeInputModule } from 'angular-code-input';
import { MaskCardNumberMiddleCharsPipe } from '@shared/pipes/mask-card-number-middle-chars.pipe';
import { BarcodeComponent } from '@shared/components/barcode/barcode.component';
import { FlagImageFromLanguageComponent } from '@shared/components/flag-image-from-language/flag-image-from-language.component';
import { SafeHtmlPipe } from '@shared/pipes/sanitize-html-pipe';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  mode: 'html',
  theme: 'tomorrow',
  tabSize: 2
};

// TODO: Move everything into Clarity shared or Landsay shared.
@NgModule({
  imports        : [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
    TranslateModule.forChild({
      // defaultLanguage: SupportedLanguages.English,
      loader : {
        provide   : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps      : [HttpClient]
      },
      isolate: false
    }),
    NgPipesModule,
    // ColorPickerModule,
    AceModule,
    CodeInputModule,
  ],
  declarations   : [
    CopyrightComponent,
    BarcodeComponent,
    FlagImageFromLanguageComponent,

    CapitalizePipe,
    MaskPipe,
    HumanizedTrueFalseToYesNoPipe,
    DefaultsToDashPipe,
    ToStringPipe,
    ToBooleanPipe,
    MaskCardNumberMiddleCharsPipe,
    SafeHtmlPipe,

    AutoFocusDirective,
    DisableAutofillDirective,
    ScrollSpyDirective
  ],
  providers      : [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  exports        : [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    IMaskModule,
    TranslateModule,
    NgPipesModule,
    // ColorPickerModule,
    AceModule,
    CodeInputModule,

    CopyrightComponent,
    BarcodeComponent,
    FlagImageFromLanguageComponent,

    CapitalizePipe,
    MaskPipe,
    HumanizedTrueFalseToYesNoPipe,
    DefaultsToDashPipe,
    ToStringPipe,
    ToBooleanPipe,
    MaskCardNumberMiddleCharsPipe,
    SafeHtmlPipe,

    AutoFocusDirective,
    DisableAutofillDirective,
    ScrollSpyDirective
  ],
})
export class SharedModule {
}
