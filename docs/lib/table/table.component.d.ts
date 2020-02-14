import { OnInit, TemplateRef, EventEmitter } from '@angular/core';
export declare class TableComponent implements OnInit {
    private bTableService;
    ctx: any;
    pConfig: PaginatorConfig;
    header: TemplateRef<any>;
    body: TemplateRef<any>;
    value: any[];
    columns: any[];
    striped: boolean;
    bordered: boolean;
    borderless: boolean;
    hover: boolean;
    small: boolean;
    dark: boolean;
    headLight: boolean;
    headDark: boolean;
    paginator: boolean;
    paginatorConfig: PaginatorConfig;
    rows: number;
    totalRecords: number;
    responsive: boolean;
    stickyHeader: boolean;
    stickyHeaderBgColor: string;
    stickyHeaderTextColor: string;
    onRowSelect: EventEmitter<any>;
    onRowUnselect: EventEmitter<any>;
    onPageChange: EventEmitter<PageEvent>;
    constructor(bTableService: BTableService);
    ngOnInit(): void;
    onPageSelect(page: PageEvent): void;
    private initializePaginator;
    private checkInputs;
}
import { BTableService } from '../services/b-table.service';
import { PaginatorConfig, PageEvent } from '../models/paginator.model';
export declare class BootstrapTableModule {
}
