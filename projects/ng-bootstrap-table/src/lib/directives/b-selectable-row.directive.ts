import { Directive, Input, OnInit, HostListener, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { BTableService } from '../services/b-table.service';

export interface BRowEvent {
  originalEvent: any;
  data: any;
  selected: boolean;
}
@Directive({
  selector: '[bSelectableRow]'
})
export class BSelectableRowDirective {
  private prevRowData: any;

  @Input() bSelectableRow: any;

  @HostListener('click', ['$event'])
  onClick(event) {
    this.selectUnSelectRow(event);
  }

  constructor(private bTableService: BTableService, private renderer: Renderer2, private hostElement: ElementRef) {}


  private selectUnSelectRow(event) {
    // console.log(event)
    // console.log(this.hostElement.nativeElement)

    let rowEvent: BRowEvent = { originalEvent: event, data: this.bSelectableRow, selected: false };
    if (!this.prevRowData) {
      rowEvent.selected = true;
      this.bTableService.onRowSelectSubject.next(rowEvent);
      // this.renderer.addClass(this.hostElement.nativeElement,'table-active');
      this.prevRowData = this.bSelectableRow;
    } else {
      if (this.prevRowData != this.bSelectableRow) {
        rowEvent.selected = true;
        this.bTableService.onRowSelectSubject.next(rowEvent);
        // this.renderer.addClass(this.hostElement.nativeElement,'table-active');
        this.prevRowData = this.bSelectableRow;
      } else {
        rowEvent.selected = false;
        this.bTableService.onRowUnselectSubject.next(rowEvent);
        // this.renderer.removeClass(this.hostElement.nativeElement,'table-active');
        this.prevRowData = null;
      }
    }
  }
}
