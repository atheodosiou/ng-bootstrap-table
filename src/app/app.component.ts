import { Component, OnInit } from '@angular/core';
import { BTableColumn } from './table/models/table-columns.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}

  title = 'bDataTableDemo';
  columns:BTableColumn[]=[
    {header:'Name',field:'name'},
    {header:'Username',field:'username'},
    {header:'Email',field:'email'},
    {header:'Phone',field:'phone'},
    {header:'Website',field:'website'}
  ];

  data:any[];

  tableClasses='table table-striped table-hover table-bordered table-sm';
  theadClasses='thead-dark';

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((users:any[])=>{
      this.data=users;
      console.log(this.data);
    });
  }

  onRowSelect(event){
    console.log(event);
  }
}
