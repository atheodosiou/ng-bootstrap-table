/**
 * @fileoverview added by tsickle
 * Generated from: lib/paginator/paginator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginatorConfig } from '../models/paginator.model';
export class PaginatorComponent {
    constructor() {
        this._first = 0;
        this._activePage = 1;
        this.onPageChange = new EventEmitter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initPaginator();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        if (this._activePage !== page) {
            this._activePage = page;
            this.onPageChange.emit(this.createPageEvent(page));
        }
    }
    /**
     * @private
     * @return {?}
     */
    initPaginator() {
        if (!this.rowsAndTotalRecordsExists()) {
            throw new Error('You must provide \'rows\' and \'totalRecords\' parameters!');
        }
        this.createPages(this.getTotalPages());
    }
    /**
     * @private
     * @return {?}
     */
    rowsAndTotalRecordsExists() {
        /** @type {?} */
        let isOk = true;
        if (!this.rows || !this.totalRecords) {
            isOk = false;
        }
        return isOk;
    }
    /**
     * @private
     * @return {?}
     */
    getTotalPages() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    /**
     * @private
     * @param {?} totalPages
     * @return {?}
     */
    createPages(totalPages) {
        this._pages = [];
        for (let i = 1; i <= totalPages; i++) {
            this._pages.push(this.createPageEvent(i));
        }
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    createPageEvent(page) {
        /** @type {?} */
        let pageEvent = {
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
PaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'b-paginator',
                template: "<div *ngIf=\"_pages?.length\" class=\"d-flex w-100\">\n  <ng-container *ngTemplateOutlet=\"paginator_template\"></ng-container>\n</div>\n\n\n<!-- <ng-template #default>\n  <nav>\n    <ul class=\"pagination\"\n    [class.pagination-sm]=\"_config?.sizing==='pagination-sm'\"\n    [class.pagination-lg]=\"_config?.sizing==='pagination-lg'\"\n    [class.justify-content-start]=\"_config?.alignment==='justify-content-start'\"\n    [class.justify-content-center]=\"_config?.alignment==='justify-content-center'\"\n    [class.justify-content-end]=\"_config?.alignment==='justify-content-end'\"\n    >\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"_activePage=1\">\n        <span aria-hidden=\"true\"><<</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(_activePage-1)\">\n          <span aria-hidden=\"true\"><</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage-1].number)\">{{_pages[_activePage-1].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage-1].number)\">{{_pages[_activePage-1].number}}</a>\n      </li>\n\n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage].number)\">{{_pages[_activePage].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage].number)\">{{_pages[_activePage].number}}</a>\n      </li>\n      \n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">{{_pages[_activePage+1].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage+1].number)\">{{_pages[_activePage+1].number}}</a>\n      </li>\n      \n      <li class=\"page-item disabled\" *ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\"><a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">...</a></li>\n      <li class=\"page-item\"*ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\"><a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">{{_pages[_pages.length-2].number}}</a></li>\n      <li class=\"page-item\" *ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\">\n        <a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">\n          {{_pages[_pages.length-1].number}}\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===(_pages.length-2)\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_activePage+1)\">\n          <span aria-hidden=\"true\">></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===(_pages.length - 2)\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"_activePage=_pages.length\">\n          <span aria-hidden=\"true\">>></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</ng-template> -->\n\n<ng-template #paginator_template>\n  <nav aria-label=\"paginator\">\n    <ul class=\"pagination\"\n    [class.pagination-sm]=\"_config?.sizing==='pagination-sm'\"\n    [class.pagination-lg]=\"_config?.sizing==='pagination-lg'\"\n    [class.justify-content-start]=\"_config?.alignment==='justify-content-start'\"\n    [class.justify-content-center]=\"_config?.alignment==='justify-content-center'\"\n    [class.justify-content-end]=\"_config?.alignment==='justify-content-end'\"\n    >\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(1)\">\n        <span aria-hidden=\"true\">First</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(_activePage-1)\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n      <li class=\"page-item\">\n        <span class=\"page-link\" style=\"color: black;\">\n          Page <span style=\"font-weight: bold;\">{{_activePage}}</span> from {{_pages?.length}}\n        </span>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===_pages.length\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_activePage+1)\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===_pages.length\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_pages.length)\">\n          <span aria-hidden=\"true\">Last</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</ng-template>",
                styles: [":host{width:100%}:host nav{width:100%}:host nav ul{margin:0}"]
            }] }
];
PaginatorComponent.propDecorators = {
    rows: [{ type: Input }],
    totalRecords: [{ type: Input }],
    config: [{ type: Input }],
    onPageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaginatorComponent.prototype._first;
    /** @type {?} */
    PaginatorComponent.prototype._config;
    /** @type {?} */
    PaginatorComponent.prototype._pages;
    /** @type {?} */
    PaginatorComponent.prototype._activePage;
    /** @type {?} */
    PaginatorComponent.prototype._paginatorState;
    /** @type {?} */
    PaginatorComponent.prototype.rows;
    /** @type {?} */
    PaginatorComponent.prototype.totalRecords;
    /** @type {?} */
    PaginatorComponent.prototype.onPageChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7QUFPdEYsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQVFFLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFTZCxpQkFBWSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO0lBd0RsRixDQUFDOzs7OztJQTVEQyxJQUFhLE1BQU0sQ0FBQyxNQUF1QjtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRTtZQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUE7U0FDOUU7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8seUJBQXlCOztZQUMzQixJQUFJLEdBQVksSUFBSTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsVUFBa0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsSUFBWTs7WUFDOUIsU0FBUyxHQUFhO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDO1lBQ2pILFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQztZQUNuSSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1NBQ3ZDO1FBQ0QsSUFBSSxTQUFTLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNoQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLCs1S0FBeUM7O2FBRTFDOzs7bUJBVUUsS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBSUwsTUFBTTs7OztJQVpQLG9DQUFtQjs7SUFDbkIscUNBQXlCOztJQUN6QixvQ0FBb0I7O0lBQ3BCLHlDQUF3Qjs7SUFDeEIsNkNBQXFCOztJQUVyQixrQ0FBc0I7O0lBQ3RCLDBDQUFzQjs7SUFLdEIsMENBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRvckNvbmZpZywgUGFnaW5hdG9yUGFnZSwgUGFnZUV2ZW50IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2luYXRvci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ItcGFnaW5hdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBfZmlyc3Q6IG51bWJlciA9IDA7XG4gIF9jb25maWc6IFBhZ2luYXRvckNvbmZpZztcbiAgX3BhZ2VzOiBQYWdlRXZlbnRbXTtcbiAgX2FjdGl2ZVBhZ2U6IG51bWJlciA9IDE7XG4gIF9wYWdpbmF0b3JTdGF0ZTogYW55O1xuXG4gIEBJbnB1dCgpIHJvd3M6IG51bWJlcjtcbiAgQElucHV0KCkgdG90YWxSZWNvcmRzO1xuICBASW5wdXQoKSBzZXQgY29uZmlnKGNvbmZpZzogUGFnaW5hdG9yQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRQYWdpbmF0b3IoKTtcbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVBhZ2UgIT09IHBhZ2UpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZVBhZ2VFdmVudChwYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0UGFnaW5hdG9yKCkge1xuICAgIGlmICghdGhpcy5yb3dzQW5kVG90YWxSZWNvcmRzRXhpc3RzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBcXCdyb3dzXFwnIGFuZCBcXCd0b3RhbFJlY29yZHNcXCcgcGFyYW1ldGVycyEnKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKHRoaXMuZ2V0VG90YWxQYWdlcygpKTtcbiAgfVxuXG4gIHByaXZhdGUgcm93c0FuZFRvdGFsUmVjb3Jkc0V4aXN0cygpOiBib29sZWFuIHtcbiAgICBsZXQgaXNPazogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKCF0aGlzLnJvd3MgfHwgIXRoaXMudG90YWxSZWNvcmRzKSB7XG4gICAgICBpc09rID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc09rO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUb3RhbFBhZ2VzKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLnJvd3MpIHx8IDE7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBhZ2VzKHRvdGFsUGFnZXM6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICB0aGlzLl9wYWdlcy5wdXNoKHRoaXMuY3JlYXRlUGFnZUV2ZW50KGkpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBhZ2VFdmVudChwYWdlOiBudW1iZXIpOiBQYWdlRXZlbnQge1xuICAgIGxldCBwYWdlRXZlbnQ6UGFnZUV2ZW50ID0ge1xuICAgICAgbmV4dFBhZ2U6IHBhZ2UgPCB0aGlzLmdldFRvdGFsUGFnZXMoKSA/IHBhZ2UgKyAxIDogcGFnZSA9PSB0aGlzLmdldFRvdGFsUGFnZXMoKSA/IG51bGwgOiB0aGlzLmdldFRvdGFsUGFnZXMoKSAtIDEsXG4gICAgICBhY3RpdmVQYWdlOiBwYWdlLFxuICAgICAgcHJldmlvdXNQYWdlOiBwYWdlICE9PSAwICYmIHBhZ2UgPCB0aGlzLmdldFRvdGFsUGFnZXMoKSA/IHBhZ2UgLSAxIDogcGFnZSA9PSAwID8gbnVsbCA6IHBhZ2UgPT0gMCA/IG51bGwgOiB0aGlzLmdldFRvdGFsUGFnZXMoKSAtIDEsXG4gICAgICByb3dzUGVyUGFnZTogdGhpcy5yb3dzLFxuICAgICAgdG90YWxSZWNvcmRzOiB0aGlzLnRvdGFsUmVjb3JkcyxcbiAgICAgIHRvdGFsUGFnZXM6IHRoaXMuZ2V0VG90YWxQYWdlcygpLFxuICAgICAgbGltaXQ6IHRoaXMucm93cyxcbiAgICAgIG9mZnNldDogKHBhZ2UgKiB0aGlzLnJvd3MpIC0gdGhpcy5yb3dzXG4gICAgfTtcbiAgICBpZiAocGFnZUV2ZW50LnByZXZpb3VzUGFnZSA9PT0gMCkge1xuICAgICAgcGFnZUV2ZW50LnByZXZpb3VzUGFnZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwYWdlRXZlbnQ7XG4gIH1cblxufVxuIl19