import { Directive, Renderer2, ElementRef, TemplateRef, ContentChild } from '@angular/core';
import { BTableService } from '../services/b-table.service';

@Directive({
  selector: '[bTemplate="body"]'
})
export class BBodyDirective{
  @ContentChild(TemplateRef,{static:false}) template: TemplateRef<any>;
  
  // constructor(private bTableService: BTableService,private renderer:Renderer2, private hostElement:ElementRef) {
  //   this.bTableService.onRowUnselectSubject.subscribe(()=>{
  //     console.log('From Body:')
  //     console.log(this.template.elementRef);
  //   })
  // }

}
