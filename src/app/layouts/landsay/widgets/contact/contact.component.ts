import { Component } from '@angular/core';
import { ContactFormService } from './contact.service';
import { ErrorMessagesService } from '@core/error-messages.service';
import { AlertTypes } from '@core/models/constants/alerts';

@Component({
  selector   : 'app-landsay-widget-contact',
  templateUrl: './contact.component.html',
  styleUrls  : ['./contact.component.scss'],
  providers  : [
    ContactFormService
  ]
})
export class LandsayWidgetContactComponent {
  shouldShowAlert       = false;
  alertMessage          = '';
  alertType: AlertTypes = AlertTypes.Danger;

  mailtoUrl = '';

  constructor(private errorMessagesService: ErrorMessagesService,
              public contactFormService: ContactFormService) {
  }

  onSendMessage($event: any) {
    this.contactFormService.form.markAllAsTouched();
    this.shouldShowAlert = false;
    this.alertMessage    = '';

    if (this.contactFormService.form.invalid) {
      this.shouldShowAlert = true;
      this.alertMessage    = this.errorMessagesService.getInvalidFormErrorMessage();

      $event.preventDefault();
      return;
    }

    const to      = encodeURIComponent('joinus@approvedfleet.com');
    const name    = encodeURIComponent(this.contactFormService.getFieldValue('name'));
    const subject = encodeURIComponent(this.contactFormService.getFieldValue('subject'));
    const message = encodeURIComponent(this.contactFormService.getFieldValue('message') + '\n\n--\n') + name;

    this.mailtoUrl = `mailto:${to}?subject=${subject}&body=${message}`;

    this.contactFormService.reset();
    this.shouldShowAlert = false;
    this.alertMessage    = '';
  }
}
