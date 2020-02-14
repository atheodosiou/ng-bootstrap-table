import { NgModule } from '@angular/core';
import { BootstrapTableModule } from './/table/table.component';
import { BTableDirectivesModule } from './directives/directive.module';
import { BTableService } from './services/b-table.service';

@NgModule({
  imports: [
    BootstrapTableModule,
    BTableDirectivesModule
  ],
  exports: [
    BootstrapTableModule,
    BTableDirectivesModule
  ],
  providers:[BTableService]
})
export class NgBootstrapTableModule { }
