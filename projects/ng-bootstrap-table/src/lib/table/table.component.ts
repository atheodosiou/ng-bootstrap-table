import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BTableColumn } from '../models/table-columns.interface';

@Component({
  selector: 'b-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  pConfig:PaginatorConfig;

  // Input properties
  @Input() columns:BTableColumn[];
  @Input() value:any[];
  @Input() responsive:boolean=true;
  @Input() paginator:boolean=false;
  @Input() rows:number;
  @Input() totalRecords:number;
  @Input() tableClasses:string='table';
  @Input() theadClasses:string='';
  @Input() trClasses:string=''
  @Input() scrollable:boolean = false;
  @Input() scrollHeight:string;
  @Input() rowHeight:string;
  // @Input() selectedRowClass:string='table-primary'
  // @Input() scrollable:boolean=false;

  //Output events
  @Output() onRowSelect:EventEmitter<any>=new EventEmitter<any>();
  @Output() onPageChange:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
    this.pConfig=new PaginatorConfig();
    this.pConfig.sizing=Sizing.SMALL;
    this.pConfig.alignment=Alignment.CENTER;

    this.checkInputs();
  }

  onRowClicked(event:any){
    this.value.forEach(row=>{
      if(row.selected){
        row.selected=false;
      }
    })
    event.selected=true;
    if(event){
      this.onRowSelect.emit(event);
    }
  }

  // onPageSelect(page:number){
  //   if(this.paginator){
  //     this.onPageChange.emit(page)
  //   }
  // }
  onPageSelect(page){
    console.log(page)
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
import { PaginatorConfig, Sizing, Alignment } from '../models/paginator.model';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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