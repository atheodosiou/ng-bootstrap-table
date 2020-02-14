/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/b-selectable-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';
import { BTableService } from '../services/b-table.service';
/**
 * @record
 */
export function BRowEvent() { }
if (false) {
    /** @type {?} */
    BRowEvent.prototype.originalEvent;
    /** @type {?} */
    BRowEvent.prototype.data;
    /** @type {?} */
    BRowEvent.prototype.selected;
}
export class BSelectableRowDirective {
    /**
     * @param {?} bTableService
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(bTableService, renderer, hostElement) {
        this.bTableService = bTableService;
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.selectUnSelectRow(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    selectUnSelectRow(event) {
        // console.log(event)
        // console.log(this.hostElement.nativeElement)
        // console.log(event)
        // console.log(this.hostElement.nativeElement)
        /** @type {?} */
        let rowEvent = { originalEvent: event, data: this.bSelectableRow, selected: false };
        if (!this.prevRowData) {
            rowEvent.selected = true;
            this.bTableService.onRowSelectSubject.next(rowEvent);
            // this.renderer.addClass(this.hostElement.nativeElement,'table-active');
            this.prevRowData = this.bSelectableRow;
        }
        else {
            if (this.prevRowData != this.bSelectableRow) {
                rowEvent.selected = true;
                this.bTableService.onRowSelectSubject.next(rowEvent);
                // this.renderer.addClass(this.hostElement.nativeElement,'table-active');
                this.prevRowData = this.bSelectableRow;
            }
            else {
                rowEvent.selected = false;
                this.bTableService.onRowUnselectSubject.next(rowEvent);
                // this.renderer.removeClass(this.hostElement.nativeElement,'table-active');
                this.prevRowData = null;
            }
        }
    }
}
BSelectableRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bSelectableRow]'
            },] }
];
/** @nocollapse */
BSelectableRowDirective.ctorParameters = () => [
    { type: BTableService },
    { type: Renderer2 },
    { type: ElementRef }
];
BSelectableRowDirective.propDecorators = {
    bSelectableRow: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BSelectableRowDirective.prototype.prevRowData;
    /** @type {?} */
    BSelectableRowDirective.prototype.bSelectableRow;
    /**
     * @type {?}
     * @private
     */
    BSelectableRowDirective.prototype.bTableService;
    /**
     * @type {?}
     * @private
     */
    BSelectableRowDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    BSelectableRowDirective.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi1zZWxlY3RhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9iLXNlbGVjdGFibGUtcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFNUQsK0JBSUM7OztJQUhDLGtDQUFtQjs7SUFDbkIseUJBQVU7O0lBQ1YsNkJBQWtCOztBQUtwQixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFVbEMsWUFBb0IsYUFBNEIsRUFBVSxRQUFtQixFQUFVLFdBQXVCO1FBQTFGLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFKbEgsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBS08saUJBQWlCLENBQUMsS0FBSztRQUM3QixxQkFBcUI7UUFDckIsOENBQThDOzs7O1lBRTFDLFFBQVEsR0FBYyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCx5RUFBeUU7Z0JBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELDRFQUE0RTtnQkFDNUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQVRRLGFBQWE7WUFEMkIsU0FBUztZQUFFLFVBQVU7Ozs2QkFjbkUsS0FBSztzQkFFTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBSmpDLDhDQUF5Qjs7SUFFekIsaURBQTZCOzs7OztJQU9qQixnREFBb0M7Ozs7O0lBQUUsMkNBQTJCOzs7OztJQUFFLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYi10YWJsZS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBCUm93RXZlbnQge1xuICBvcmlnaW5hbEV2ZW50OiBhbnk7XG4gIGRhdGE6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYlNlbGVjdGFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBCU2VsZWN0YWJsZVJvd0RpcmVjdGl2ZSB7XG4gIHByaXZhdGUgcHJldlJvd0RhdGE6IGFueTtcblxuICBASW5wdXQoKSBiU2VsZWN0YWJsZVJvdzogYW55O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudCkge1xuICAgIHRoaXMuc2VsZWN0VW5TZWxlY3RSb3coZXZlbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiVGFibGVTZXJ2aWNlOiBCVGFibGVTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cblxuICBwcml2YXRlIHNlbGVjdFVuU2VsZWN0Um93KGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KVxuXG4gICAgbGV0IHJvd0V2ZW50OiBCUm93RXZlbnQgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBkYXRhOiB0aGlzLmJTZWxlY3RhYmxlUm93LCBzZWxlY3RlZDogZmFsc2UgfTtcbiAgICBpZiAoIXRoaXMucHJldlJvd0RhdGEpIHtcbiAgICAgIHJvd0V2ZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYlRhYmxlU2VydmljZS5vblJvd1NlbGVjdFN1YmplY3QubmV4dChyb3dFdmVudCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwndGFibGUtYWN0aXZlJyk7XG4gICAgICB0aGlzLnByZXZSb3dEYXRhID0gdGhpcy5iU2VsZWN0YWJsZVJvdztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJldlJvd0RhdGEgIT0gdGhpcy5iU2VsZWN0YWJsZVJvdykge1xuICAgICAgICByb3dFdmVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYlRhYmxlU2VydmljZS5vblJvd1NlbGVjdFN1YmplY3QubmV4dChyb3dFdmVudCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCd0YWJsZS1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5wcmV2Um93RGF0YSA9IHRoaXMuYlNlbGVjdGFibGVSb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3dFdmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJUYWJsZVNlcnZpY2Uub25Sb3dVbnNlbGVjdFN1YmplY3QubmV4dChyb3dFdmVudCk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCd0YWJsZS1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5wcmV2Um93RGF0YSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=