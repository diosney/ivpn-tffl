import { NgModule } from '@angular/core';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { SharedModule } from '@shared/shared.module';
import { LandsayLayoutsModule } from '@layouts/landsay/landsay.module';
import { LandingHomeComponent } from './home/home.component';
import { LandingFaqComponent } from './faq/faq.component';
import { LandingTermsComponent } from './terms/terms.component';
import { LandingPrivacyComponent } from './privacy/privacy.component';
import { LandingLoginComponent } from './login/login.component';
import { LandingEnrollComponent } from './enroll/enroll.component';

@NgModule({
  imports     : [
    NzStepsModule,

    SharedModule,
    LandsayLayoutsModule
  ],
  declarations: [
    LandingHomeComponent,
    LandingFaqComponent,
    LandingTermsComponent,
    LandingPrivacyComponent,
    LandingLoginComponent,
    LandingEnrollComponent
  ],
  providers   : []
})
export class LandingModule {
}
