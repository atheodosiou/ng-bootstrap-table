import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }
  _activePage:number=0;
  _pages:any[]=[];
  @Input() set total(value:number){
    for(let i=0; i<value; i++){
      let item={number:i+1};
      this._pages.push(item);
    }
  }
  ngOnInit() {
  }

  setPage(page:number, event){
    event.preventDefault();
    this._activePage=page;
    console.log(this._activePage)
  }
}
