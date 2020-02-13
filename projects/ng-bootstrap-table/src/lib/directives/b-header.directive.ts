import { Directive, Input, OnInit } from '@angular/core';
import { BTemplate } from '../models/template.model';

@Directive({
  selector: '[bTemplate="header"]'
})
export class BHeaderDirective implements OnInit{

  @Input() bTemplate:BTemplate;
  constructor() { }
  ngOnInit(){
   console.log('BHeaderDirective Works!')
  }
}
