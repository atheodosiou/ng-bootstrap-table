import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }
  @Input() total:number=10;
  ngOnInit() {
  }

}
