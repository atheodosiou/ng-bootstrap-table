import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BTableColumn } from './models/table-columns.interface';

@Component({
  selector: 'b-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  // Input properties
  @Input() columns:BTableColumn[];
  @Input() value:any[];
  @Input() responsive:boolean=true;
  @Input() paginator:boolean=false;
  @Input() rows:number;

  // @Input() scrollable:boolean=false;
  @Input() tableClasses:string='table';
  @Input() theadClasses:string='';
  @Input() trClasses:string=''
  // @Input() selectedRowClass:string='table-primary'

  //Output events
  @Output() onRowSelect:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
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

  onPageSelect(page:number){
    console.log(page);
  }
}
