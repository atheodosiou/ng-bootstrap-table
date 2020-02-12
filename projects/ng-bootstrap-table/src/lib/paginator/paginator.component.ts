import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PaginatorConfig, PaginatorPage, PageEvent } from '../models/paginator.model';

@Component({
  selector: 'b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {


  _first: number = 0;
  _config: PaginatorConfig;
  _pages: PageEvent[];
  _activePage: number = 1;
  _paginatorState: any;

  @Input() rows: number;
  @Input() totalRecords;
  @Input() set config(config: PaginatorConfig) {
    this._config = config;
  }

  @Output() onPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit() {
    this.initPaginator();
  }

  setPage(page: number) {
    if (this._activePage !== page) {
      this._activePage = page;
      this.onPageChange.emit(this.createPageEvent(page));
    }
  }

  private initPaginator() {
    if (!this.rowsAndTotalRecordsExists()) {
      throw new Error('You must provide \'rows\' and \'totalRecords\' parameters!')
    }
    this.createPages(this.getTotalPages());
  }

  private rowsAndTotalRecordsExists(): boolean {
    let isOk: boolean = true;
    if (!this.rows || !this.totalRecords) {
      isOk = false;
    }
    return isOk;
  }

  private getTotalPages() {
    return Math.ceil(this.totalRecords / this.rows) || 1;
  }

  private createPages(totalPages: number) {
    this._pages = [];
    for (let i = 1; i <= totalPages; i++) {
      this._pages.push(this.createPageEvent(i));
    }
  }

  private createPageEvent(page: number): PageEvent {
    let pageEvent:PageEvent = {
      nextPage: page < this.getTotalPages() ? page + 1 : page == this.getTotalPages() ? null : this.getTotalPages() - 1,
      activePage: page,
      previousPage: page !== 0 && page < this.getTotalPages() ? page - 1 : page == 0 ? null : page == 0 ? null : this.getTotalPages() - 1,
      rowsPerPage: this.rows,
      totalRecords: this.totalRecords,
      totalPages: this.getTotalPages(),
      limit: this.rows,
      offset: (page * this.rows) - this.rows
    };
    if (pageEvent.previousPage === 0) {
      pageEvent.previousPage = null;
    }
    return pageEvent;
  }

}
