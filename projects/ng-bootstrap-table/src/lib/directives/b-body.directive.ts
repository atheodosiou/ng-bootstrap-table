import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[bTemplate="body"]'
})
export class BBodyDirective implements OnInit{
  constructor() { }
  ngOnInit(){
    console.log('BBodyDirective Works!')
   }
}
