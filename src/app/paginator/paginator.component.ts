import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }
  // Input properties
  _activePage: number;
  _pages: any[];
  _numOfPages: number;

  @Input() totalRecords: number;
  @Input() rows: number;
  //Output events
  @Output() onPageSelect: EventEmitter<any> = new EventEmitter<any>();

  //============================ Public Methods ============================
  ngOnInit() {
    if (!this.totalRecords || !this.rows) {
      throw new Error('You must provide \'totalRecords\' and \'rows\' properties!');
    }
    this._numOfPages = this.getPagesNumber(this.totalRecords, this.rows);
    this.createPages(this._numOfPages);
    this.setPage(1);
  }

  setPage(page: number, event?) {
    if (event) {
      event.preventDefault();
    }
    this._activePage = page;
    this.onPageSelect.emit(this.createPageEvent(page));
  }

  //============================ Private Methods ============================
  private getPagesNumber(total: number, rowsPerPage: number): number {
    return Math.ceil(total / rowsPerPage);
  }

  private createPages(total: number) {
    if (!this._pages) this._pages = [];

    for (let i = 0; i < total; i++) {
      let item = { number: i + 1 };
      this._pages.push(item);
    }
  }

  private createPageEvent(page: number): any {
    let pageEvent = {
      nextPage: page < this._numOfPages ? page + 1 : page == this._numOfPages ? null : this._numOfPages - 1,
      activePage: page,
      previousPage: page !== 0 && page < this._numOfPages ? page - 1 : page == 0 ? null : page == 0 ? null : this._numOfPages - 1,
      rowsPerPage:this.rows,
      totalRecords:this.totalRecords,
      totalPages:this._numOfPages,
      limit:this.rows,
      offset:(page*this.rows)-this.rows
    };
    if (pageEvent.previousPage === 0) {
      pageEvent.previousPage = null;
    }
    return pageEvent;
  }
}
