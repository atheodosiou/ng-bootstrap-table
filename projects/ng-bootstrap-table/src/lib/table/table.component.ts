import { Component, OnInit, Input,ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'b-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //context
  ctx;

  @ContentChild(BHeaderDirective, { static: true, read: TemplateRef }) header: TemplateRef<any>;
  @ContentChild(BBodyDirective, { static: true, read: TemplateRef }) body: TemplateRef<any>;

  @Input() value:any[];
  @Input() columns: any[];

  @Input() striped: boolean;
  @Input() bordered: boolean;
  @Input() borderless: boolean;
  @Input() hover: boolean;
  @Input() small: boolean;
  @Input() responsive: boolean;
  @Input() stickyHeader = false;
  @Input() stickyHeaderBgColor = '';
  @Input() stickyHeaderTextColor = '';

  
  constructor() {}
  
  ngOnInit() {
    console.log('Table works');
  }
}


import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '../paginator/paginator.module';
import { BHeaderDirective } from '../directives/b-header.directive';
import { BBodyDirective } from '../directives/b-body.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginatorModule
  ],
  exports: [TableComponent],
  declarations: [TableComponent]
})
export class BootstrapTableModule { }