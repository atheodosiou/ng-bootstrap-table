export declare class PaginatorConfig {
    sizing: Sizing;
    alignment: Alignment;
}
export declare enum Alignment {
    LEFT = "justify-content-start",
    CENTER = "justify-content-center",
    RIGHT = "justify-content-end"
}
export declare enum Sizing {
    SMALL = "pagination-sm",
    LARGE = "pagination-lg"
}
export declare class PaginatorPage {
    previousPage: number;
    currentPage: number;
    nextPage: number;
    disabled: boolean;
    active: boolean;
}
export interface PageEvent {
    nextPage: number;
    activePage: number;
    previousPage: number;
    rowsPerPage: number;
    totalRecords: number;
    totalPages: number;
    limit: number;
    offset: number;
}
