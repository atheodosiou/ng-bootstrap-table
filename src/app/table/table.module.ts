import { NgModule } from "@angular/core";
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    PaginatorModule
  ],
  exports:[TableComponent],
  declarations:[TableComponent]
})
export class BootstrapTableModule{}