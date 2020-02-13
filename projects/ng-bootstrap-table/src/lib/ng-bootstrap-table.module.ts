import { NgModule } from '@angular/core';
import { BootstrapTableModule } from './/table/table.component';
import { BHeaderDirective } from './directives/b-header.directive';
import { BBodyDirective } from './directives/b-body.directive';

@NgModule({
  imports: [
    BootstrapTableModule
  ],
  declarations:[BHeaderDirective,BBodyDirective],
  exports: [BootstrapTableModule,BHeaderDirective,BBodyDirective]
})
export class NgBootstrapTableModule { }
