import { Component, OnInit, Input,ContentChild, TemplateRef, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'b-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //context
  ctx;
  pConfig:PaginatorConfig;
  
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
      // console.log('table>onRowSelectSubject',value)
      this.onRowSelect.emit(value);
    })
    this.bTableService.onRowUnselectSubject.subscribe(value=>{
      this.onRowUnselect.emit(value);
    })
    if(this.paginator){
      this.initializePaginator();
    }
     this.checkInputs();
    //  console.log(this.paginator,this.rows,this.totalRecords,this.paginatorConfig)
  }

  onPageSelect(page:PageEvent){
    console.log(page)
    this.onPageChange.emit(page);
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