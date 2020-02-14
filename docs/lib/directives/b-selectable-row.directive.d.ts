import { Renderer2, ElementRef } from '@angular/core';
import { BTableService } from '../services/b-table.service';
export interface BRowEvent {
    originalEvent: any;
    data: any;
    selected: boolean;
}
export declare class BSelectableRowDirective {
    private bTableService;
    private renderer;
    private hostElement;
    private prevRowData;
    bSelectableRow: any;
    onClick(event: any): void;
    constructor(bTableService: BTableService, renderer: Renderer2, hostElement: ElementRef);
    private selectUnSelectRow;
}
