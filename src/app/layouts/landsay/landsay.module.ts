import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { LandsayLayoutIncludesComponent } from './includes/includes.component';
import { LandsayLandingLayoutComponent } from './landing/landing.component';
import { LandsayLandingLayoutHeaderComponent } from './landing/partials/header/header.component';
import { LandsayLandingLayoutFooterComponent } from './landing/partials/footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LandsayPageHeadingGoBackButtonComponent } from './components/buttons/page-heading-go-back/page-heading-go-back.component';
import { LandsayLandingLayoutPageHeadingComponent } from './landing/partials/page-heading/page-heading.component';
import {
  AccordionConfig,
  AccordionModule
} from 'ngx-bootstrap/accordion';
import { LandsayPageAccordionIndicatorIconComponent } from './components/buttons/accordion-indicator-icon/accordion-indicator-icon.component';
import { LandsayWidgetFaqComponent } from './widgets/faq/faq.component';
import { LandsayWidgetContactComponent } from './widgets/contact/contact.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LandsayWidgetPriceCircleComponent } from './widgets/price-circle/price-circle.component';
import { LandsayWidgetSafeSimpleSecureComponent } from './widgets/safe-simple-secure/safe-simple-secure.component';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {
    isAnimated : true,
    closeOthers: true
  });
}

@NgModule({
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    ScrollToModule.forRoot(),
    BsDropdownModule.forRoot(),

    AccordionModule.forRoot(),
    ModalModule,
    AlertModule
  ],
  declarations: [
    LandsayLayoutIncludesComponent,
    LandsayLandingLayoutComponent,
    LandsayLandingLayoutHeaderComponent,
    LandsayLandingLayoutFooterComponent,
    LandsayPageHeadingGoBackButtonComponent,
    LandsayLandingLayoutPageHeadingComponent,
    LandsayPageAccordionIndicatorIconComponent,
    LandsayWidgetFaqComponent,
    LandsayWidgetContactComponent,
    LandsayWidgetPriceCircleComponent,
    LandsayWidgetSafeSimpleSecureComponent
  ],
  exports     : [
    AccordionModule,
    ModalModule,
    AlertModule,

    LandsayPageHeadingGoBackButtonComponent,
    LandsayPageAccordionIndicatorIconComponent,
    LandsayWidgetFaqComponent,
    LandsayWidgetContactComponent,
    LandsayWidgetPriceCircleComponent,
    LandsayWidgetSafeSimpleSecureComponent
  ],
  providers   : [
    {
      provide   : AccordionConfig,
      useFactory: getAccordionConfig
    }
  ]
})
export class LandsayLayoutsModule {
}
