import { Component, OnInit } from '@angular/core';
import { BTableColumn } from '../../projects/ng-bootstrap-table/src/lib/models/table-columns.interface';
import { HttpClient } from '@angular/common/http';
import { PageEvent, PaginatorConfig, Sizing, Alignment } from 'projects/ng-bootstrap-table/src/lib/models/paginator.model';
// import { PaginatorConfig, Sizing, Alignment } from 'projects/ng-bootstrap-table/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
  selectedRow:any;
  pConfig:PaginatorConfig;
  
  title = 'bDataTableDemo';
  columns:BTableColumn[]=[
    {header:'Name',field:'name'},
    {header:'Username',field:'username'},
    {header:'Email',field:'email'},
    {header:'Phone',field:'phone'},
    {header:'Website',field:'website'}
  ];

  data:any[];
  _data:any[];
  rows:number=3;
  activePage:number = 1;

  tableClasses='table table-striped table-hover table-bordered';
  theadClasses='';

  // pConfig:PaginatorConfig;
  
  ngOnInit(){
    this.pConfig= new PaginatorConfig();
    this.pConfig.sizing = Sizing.SMALL;
    this.pConfig.alignment= Alignment.RIGHT;

    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((users:any[])=>{
      this.data=users;
      // this._data=users;
      // this.data = this.paginate(this._data,this.rows,this.activePage);
    });
  }

  onRowSelect(event){
    console.log(event);
  }

  onRowUnselect(event){
    console.log(event);
  }

  onPageChange(event:PageEvent){
    console.log(event)
    // this.data= this.paginate(this._data,event.rowsPerPage,event.activePage);
    // console.log(event,this.data);
  }

  
}
