import { OnInit, EventEmitter } from '@angular/core';
import { PaginatorConfig, PageEvent } from '../models/paginator.model';
export declare class PaginatorComponent implements OnInit {
    _first: number;
    _config: PaginatorConfig;
    _pages: PageEvent[];
    _activePage: number;
    _paginatorState: any;
    rows: number;
    totalRecords: any;
    config: PaginatorConfig;
    onPageChange: EventEmitter<PageEvent>;
    ngOnInit(): void;
    setPage(page: number): void;
    private initPaginator;
    private rowsAndTotalRecordsExists;
    private getTotalPages;
    private createPages;
    private createPageEvent;
}
