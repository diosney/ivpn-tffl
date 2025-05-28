import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  pure: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
