export class PaginatorConfig{
    sizing:Sizing;
    alignment: Alignment = Alignment.RIGHT;
}

export enum Alignment{
    LEFT="justify-content-start",
    CENTER="justify-content-center",
    RIGHT="justify-content-end"
}

export enum Sizing{
    SMALL="pagination-sm",
    LARGE="pagination-lg"
}

export class PaginatorPage {
    previousPage:number
    currentPage:number;
    nextPage:number;
    disabled:boolean;
    active:boolean;
}