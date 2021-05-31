/* Custom Autofocus Directive From https://netbasal.com/autofocus-that-works-anytime-in-angular-apps-68cb89a3f057 */
/* We use this because HTML autofocus only autofocuses on first page load */

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]',
})
export class AutofocusDirective {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }
}
