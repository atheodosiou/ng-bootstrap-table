/**
 * @fileoverview added by tsickle
 * Generated from: lib/paginator/paginator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginatorConfig } from '../models/paginator.model';
var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this._first = 0;
        this._activePage = 1;
        this.onPageChange = new EventEmitter();
    }
    Object.defineProperty(PaginatorComponent.prototype, "config", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initPaginator();
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginatorComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (this._activePage !== page) {
            this._activePage = page;
            this.onPageChange.emit(this.createPageEvent(page));
        }
    };
    /**
     * @private
     * @return {?}
     */
    PaginatorComponent.prototype.initPaginator = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.rowsAndTotalRecordsExists()) {
            throw new Error('You must provide \'rows\' and \'totalRecords\' parameters!');
        }
        this.createPages(this.getTotalPages());
    };
    /**
     * @private
     * @return {?}
     */
    PaginatorComponent.prototype.rowsAndTotalRecordsExists = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isOk = true;
        if (!this.rows || !this.totalRecords) {
            isOk = false;
        }
        return isOk;
    };
    /**
     * @private
     * @return {?}
     */
    PaginatorComponent.prototype.getTotalPages = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    /**
     * @private
     * @param {?} totalPages
     * @return {?}
     */
    PaginatorComponent.prototype.createPages = /**
     * @private
     * @param {?} totalPages
     * @return {?}
     */
    function (totalPages) {
        this._pages = [];
        for (var i = 1; i <= totalPages; i++) {
            this._pages.push(this.createPageEvent(i));
        }
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    PaginatorComponent.prototype.createPageEvent = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var pageEvent = {
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
    };
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
    return PaginatorComponent;
}());
export { PaginatorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7QUFFdEY7SUFBQTtRQVFFLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFTZCxpQkFBWSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO0lBd0RsRixDQUFDO0lBNURDLHNCQUFhLHNDQUFNOzs7OztRQUFuQixVQUFvQixNQUF1QjtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQUlELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUFFTywwQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRTtZQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUE7U0FDOUU7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sc0RBQXlCOzs7O0lBQWpDOztZQUNNLElBQUksR0FBWSxJQUFJO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sMENBQWE7Ozs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVPLHdDQUFXOzs7OztJQUFuQixVQUFvQixVQUFrQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7OztJQUVPLDRDQUFlOzs7OztJQUF2QixVQUF3QixJQUFZOztZQUM5QixTQUFTLEdBQWE7WUFDeEIsUUFBUSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUM7WUFDakgsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDO1lBQ25JLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUk7U0FDdkM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsKzVLQUF5Qzs7aUJBRTFDOzs7dUJBVUUsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBSUwsTUFBTTs7SUF3RFQseUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXZFWSxrQkFBa0I7OztJQUc3QixvQ0FBbUI7O0lBQ25CLHFDQUF5Qjs7SUFDekIsb0NBQW9COztJQUNwQix5Q0FBd0I7O0lBQ3hCLDZDQUFxQjs7SUFFckIsa0NBQXNCOztJQUN0QiwwQ0FBc0I7O0lBS3RCLDBDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0b3JDb25maWcsIFBhZ2luYXRvclBhZ2UsIFBhZ2VFdmVudCB9IGZyb20gJy4uL21vZGVscy9wYWdpbmF0b3IubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiLXBhZ2luYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgX2ZpcnN0OiBudW1iZXIgPSAwO1xuICBfY29uZmlnOiBQYWdpbmF0b3JDb25maWc7XG4gIF9wYWdlczogUGFnZUV2ZW50W107XG4gIF9hY3RpdmVQYWdlOiBudW1iZXIgPSAxO1xuICBfcGFnaW5hdG9yU3RhdGU6IGFueTtcblxuICBASW5wdXQoKSByb3dzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsUmVjb3JkcztcbiAgQElucHV0KCkgc2V0IGNvbmZpZyhjb25maWc6IFBhZ2luYXRvckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIEBPdXRwdXQoKSBvblBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0UGFnaW5hdG9yKCk7XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9hY3RpdmVQYWdlICE9PSBwYWdlKSB7XG4gICAgICB0aGlzLl9hY3RpdmVQYWdlID0gcGFnZTtcbiAgICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQodGhpcy5jcmVhdGVQYWdlRXZlbnQocGFnZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdFBhZ2luYXRvcigpIHtcbiAgICBpZiAoIXRoaXMucm93c0FuZFRvdGFsUmVjb3Jkc0V4aXN0cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgXFwncm93c1xcJyBhbmQgXFwndG90YWxSZWNvcmRzXFwnIHBhcmFtZXRlcnMhJylcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVQYWdlcyh0aGlzLmdldFRvdGFsUGFnZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIHJvd3NBbmRUb3RhbFJlY29yZHNFeGlzdHMoKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzT2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmICghdGhpcy5yb3dzIHx8ICF0aGlzLnRvdGFsUmVjb3Jkcykge1xuICAgICAgaXNPayA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNPaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG90YWxQYWdlcygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudG90YWxSZWNvcmRzIC8gdGhpcy5yb3dzKSB8fCAxO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQYWdlcyh0b3RhbFBhZ2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgdGhpcy5fcGFnZXMucHVzaCh0aGlzLmNyZWF0ZVBhZ2VFdmVudChpKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQYWdlRXZlbnQocGFnZTogbnVtYmVyKTogUGFnZUV2ZW50IHtcbiAgICBsZXQgcGFnZUV2ZW50OlBhZ2VFdmVudCA9IHtcbiAgICAgIG5leHRQYWdlOiBwYWdlIDwgdGhpcy5nZXRUb3RhbFBhZ2VzKCkgPyBwYWdlICsgMSA6IHBhZ2UgPT0gdGhpcy5nZXRUb3RhbFBhZ2VzKCkgPyBudWxsIDogdGhpcy5nZXRUb3RhbFBhZ2VzKCkgLSAxLFxuICAgICAgYWN0aXZlUGFnZTogcGFnZSxcbiAgICAgIHByZXZpb3VzUGFnZTogcGFnZSAhPT0gMCAmJiBwYWdlIDwgdGhpcy5nZXRUb3RhbFBhZ2VzKCkgPyBwYWdlIC0gMSA6IHBhZ2UgPT0gMCA/IG51bGwgOiBwYWdlID09IDAgPyBudWxsIDogdGhpcy5nZXRUb3RhbFBhZ2VzKCkgLSAxLFxuICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93cyxcbiAgICAgIHRvdGFsUmVjb3JkczogdGhpcy50b3RhbFJlY29yZHMsXG4gICAgICB0b3RhbFBhZ2VzOiB0aGlzLmdldFRvdGFsUGFnZXMoKSxcbiAgICAgIGxpbWl0OiB0aGlzLnJvd3MsXG4gICAgICBvZmZzZXQ6IChwYWdlICogdGhpcy5yb3dzKSAtIHRoaXMucm93c1xuICAgIH07XG4gICAgaWYgKHBhZ2VFdmVudC5wcmV2aW91c1BhZ2UgPT09IDApIHtcbiAgICAgIHBhZ2VFdmVudC5wcmV2aW91c1BhZ2UgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZUV2ZW50O1xuICB9XG5cbn1cbiJdfQ==