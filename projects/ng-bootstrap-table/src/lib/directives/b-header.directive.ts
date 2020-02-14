import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bTemplate="header"]'
})
export class BHeaderDirective{
  constructor() { }
}
