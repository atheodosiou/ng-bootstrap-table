import { Directive, Input, OnInit, HostListener, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { BTableService } from '../services/b-table.service';

@Directive({
  selector: '[bSelectableRow]'
})
export class BSelectableRowDirective {
  private prevRowData: any;

  @Input() bSelectableRow: any;

  @HostListener('click')
  onClick() {
    this.selectUnSelectRow();
  }

  constructor(private bTableService: BTableService) {}


  private selectUnSelectRow() {
    if (!this.prevRowData) {
      this.bTableService.onRowSelectSubject.next(this.bSelectableRow);
      this.prevRowData = this.bSelectableRow;
    } else {
      if (this.prevRowData != this.bSelectableRow) {
        this.bTableService.onRowSelectSubject.next(this.bSelectableRow);
        this.prevRowData = this.bSelectableRow;
      } else {
        this.bTableService.onRowUnselectSubject.next(this.bSelectableRow);
        this.prevRowData = null;
      }
    }
  }
}
