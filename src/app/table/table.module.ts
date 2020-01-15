import { NgModule } from "@angular/core";
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    CommonModule,
    FormsModule
  ],
  exports:[TableComponent],
  declarations:[TableComponent]
})
export class BootstrapTableModule{}