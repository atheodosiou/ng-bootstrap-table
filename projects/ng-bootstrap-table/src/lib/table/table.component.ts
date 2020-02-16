import { Component, OnInit, Input,ContentChild, TemplateRef, Output, EventEmitter, ViewChild, ElementRef, ɵAPP_ROOT} from '@angular/core';
import {filter} from 'lodash';

@Component({
  selector: 'b-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //context
  ctx;
  pConfig:PaginatorConfig;
  private _value:any[];
  activePage:number = 1;

  @ContentChild(BHeaderDirective, { static: true, read: TemplateRef }) header: TemplateRef<any>;
  @ContentChild(BBodyDirective, { static: true, read: TemplateRef }) body: TemplateRef<any>;

  @Input() value:any[];
  @Input() columns: any[];
  @Input() striped: boolean;
  @Input() bordered: boolean;
  @Input() borderless: boolean;
  @Input() hover: boolean;
  @Input() small: boolean;
  @Input() dark:boolean;
  @Input() headLight:boolean;
  @Input() headDark:boolean;
  @Input() paginator:boolean=false;
  @Input() paginatorConfig:PaginatorConfig;
  @Input() rows:number;
  @Input() totalRecords:number;
  @Input() responsive: boolean;
  @Input() stickyHeader = false;
  @Input() stickyHeaderBgColor = '';
  @Input() stickyHeaderTextColor = '';

  @Output() onRowSelect:EventEmitter<any>;
  @Output() onRowUnselect:EventEmitter<any>;
  @Output() onPageChange:EventEmitter<PageEvent>

  constructor(private bTableService:BTableService) {
    this.onRowSelect = new EventEmitter<any>();
    this.onRowUnselect=new EventEmitter<any>();
    this.onPageChange=new EventEmitter<PageEvent>();
  }
  
  ngOnInit() {
    this.bTableService.onRowSelectSubject.subscribe(value=>{
      this.onRowSelect.emit(value);
    })
    this.bTableService.onRowUnselectSubject.subscribe(value=>{
      this.onRowUnselect.emit(value);
    })
    
    this.bTableService.dataSource.next(this.value);
    this.bTableService.columns.next(this.columns);

    if(this.paginator){
      this.initializePaginator();
    }else{
      this._value=this.value;
    }
     this.checkInputs();
     
  }

  onPageSelect(page:PageEvent){
    this.activePage=page.activePage;
    this.onPageChange.emit(page);
    this._value= this.paginate(this.value,page.rowsPerPage,page.activePage);
  }

  filter(value){
    console.log('b-table:filter():',value,this.value,this.columns);
    console.log('Filtered values:',filter(this.value,{name:value}));
  }

  //========================================> INTERNAL FUNCTIONS <========================================
  private initializePaginator(){
    if(!this.paginatorConfig){
      //Default configuration
      this.pConfig=new PaginatorConfig();
      this.pConfig.sizing=Sizing.SMALL;
      this.pConfig.alignment=Alignment.RIGHT;
    }else{
      this.pConfig = this.paginatorConfig;
    }
    this._value = this.paginate(this.value,this.rows,this.activePage);
  }

  private checkInputs(){
    if(!this.columns || !this.value){
      throw new Error('Missing required properties! \'columns\' and \'value\' must be provided.')
    }

    if(this.paginator === true){
      if(!this.rows || !this.totalRecords){
        throw new Error('Missing required properties! \'rows\' and \'totalRecords\' must be provided if \'paginator\' is true.')
      }
    }
  }

  private paginate(array:any[],page_size:number,page_number:number):any[]{
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
}


import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '../paginator/paginator.module';
import { BHeaderDirective } from '../directives/b-header.directive';
import { BBodyDirective } from '../directives/b-body.directive';
import { BTableService } from '../services/b-table.service';
import { PaginatorConfig, Sizing, Alignment, PageEvent } from '../models/paginator.model';

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