import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }
  _activePage:number=1;
  _pages:any[]=[];
  @Input() set total(value:number){
    for(let i=0; i<value; i++){
      let item={number:i+1};
      this._pages.push(item);
    }
  }

  @Output() onPageSelect:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
  }

  setPage(page:number, event){
    event.preventDefault();
    this._activePage=page;
    this.onPageSelect.emit(page);
  }
}
