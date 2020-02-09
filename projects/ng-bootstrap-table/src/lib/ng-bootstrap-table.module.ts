import { NgModule } from '@angular/core';
import { BootstrapTableModule } from './/table/table.component';

@NgModule({
  imports: [
    BootstrapTableModule
  ],
  exports: [BootstrapTableModule]
})
export class NgBootstrapTableModule { }
