import { Directive } from '@angular/core';

@Directive({
  selector: '[bTemplate="body"]'
})
export class BBodyDirective{
  constructor() { }
}
