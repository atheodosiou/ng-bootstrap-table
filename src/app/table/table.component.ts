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
  @Input() tableClasses:string='table';
  @Input() theadClasses:string='';
  @Input() tableCaption:boolean=false;

  //Output events
  @Output() onRowSelect:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
  }

  onRowClicked(event:any){
    if(event){
      this.onRowSelect.emit(event);
    }
  }
}
