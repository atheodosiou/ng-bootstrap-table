import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PaginatorComponent],
  declarations: [PaginatorComponent]
})
export class PaginatorModule { }
