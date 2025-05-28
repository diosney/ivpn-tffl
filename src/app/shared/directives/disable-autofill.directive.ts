import {
  AfterViewInit,
  Directive,
  ElementRef, Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDisableAutofill]'
})
export class DisableAutofillDirective implements AfterViewInit {
  @Input() useRandomStrategy = true;

  public constructor(private readonly elementRef: ElementRef,
                     private readonly renderer: Renderer2) {
  }

  ngAfterViewInit() {
    // Old solution, left here just in case.
    // Remove it if everything works properly.
    // The new solution is to fix Chrome behavior.
    if (this.useRandomStrategy) {
      const randomString = Math.random().toString(36).slice(-6);

      this.elementRef.nativeElement.setAttribute('autocomplete', randomString);
      this.elementRef.nativeElement.setAttribute('name', `name-${randomString}`);
      return;
    }

    this.renderer.setAttribute(this.elementRef.nativeElement, 'autocomplete', 'new-password');
    this.renderer.setAttribute(this.elementRef.nativeElement, 'name', 'new-password');
  }
}
