import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { LandsayLayoutsModule } from '@layouts/landsay/landsay.module';
import { LandingModule } from './modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,

    LandsayLayoutsModule,

    // Leave the following ordering as it is!
    // This is so the default route from Home gets correctly matched.
    LandingModule,
    EnrollmentModule,

    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
