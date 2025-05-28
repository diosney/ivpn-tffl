import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EnrollmentComponent } from './enrollment.component';

@NgModule({
  imports     : [
    SharedModule
  ],
  declarations: [
    EnrollmentComponent
  ],
  providers   : []
})
export class EnrollmentModule {
}
