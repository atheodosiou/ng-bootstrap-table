import { EventEmitter, Component, Input, Output, NgModule, Directive, ContentChild, TemplateRef, Injectable, ɵɵdefineInjectable, Renderer2, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paginator.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginatorConfig {
    constructor() {
        this.alignment = Alignment.RIGHT;
    }
}
if (false) {
    /** @type {?} */
    PaginatorConfig.prototype.sizing;
    /** @type {?} */
    PaginatorConfig.prototype.alignment;
}
/** @enum {string} */
const Alignment = {
    LEFT: "justify-content-start",
    CENTER: "justify-content-center",
    RIGHT: "justify-content-end",
};
/** @enum {string} */
const Sizing = {
    SMALL: "pagination-sm",
    LARGE: "pagination-lg",
};
class PaginatorPage {
}
if (false) {
    /** @type {?} */
    PaginatorPage.prototype.previousPage;
    /** @type {?} */
    PaginatorPage.prototype.currentPage;
    /** @type {?} */
    PaginatorPage.prototype.nextPage;
    /** @type {?} */
    PaginatorPage.prototype.disabled;
    /** @type {?} */
    PaginatorPage.prototype.active;
}
/**
 * @record
 */
function PageEvent() { }
if (false) {
    /** @type {?} */
    PageEvent.prototype.nextPage;
    /** @type {?} */
    PageEvent.prototype.activePage;
    /** @type {?} */
    PageEvent.prototype.previousPage;
    /** @type {?} */
    PageEvent.prototype.rowsPerPage;
    /** @type {?} */
    PageEvent.prototype.totalRecords;
    /** @type {?} */
    PageEvent.prototype.totalPages;
    /** @type {?} */
    PageEvent.prototype.limit;
    /** @type {?} */
    PageEvent.prototype.offset;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/paginator/paginator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginatorComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/paginator/paginator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginatorModule {
}
PaginatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [PaginatorComponent],
                declarations: [PaginatorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/b-header.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BHeaderDirective {
    constructor() { }
}
BHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bTemplate="header"]'
            },] }
];
/** @nocollapse */
BHeaderDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/b-body.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BBodyDirective {
}
BBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bTemplate="body"]'
            },] }
];
BBodyDirective.propDecorators = {
    template: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};
if (false) {
    /** @type {?} */
    BBodyDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/b-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BTableService {
    constructor() {
        //Subjects to handle b-table row select and unselect actions
        this.$onRowSelectSubject = new Subject();
        this.$onRowUnselectSubject = new Subject();
    }
    //Subject getters
    /**
     * @return {?}
     */
    get onRowSelectSubject() {
        return this.$onRowSelectSubject;
    }
    /**
     * @return {?}
     */
    get onRowUnselectSubject() {
        return this.$onRowUnselectSubject;
    }
}
BTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BTableService.ctorParameters = () => [];
/** @nocollapse */ BTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BTableService_Factory() { return new BTableService(); }, token: BTableService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BTableService.prototype.$onRowSelectSubject;
    /**
     * @type {?}
     * @private
     */
    BTableService.prototype.$onRowUnselectSubject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    /**
     * @param {?} bTableService
     */
    constructor(bTableService) {
        this.bTableService = bTableService;
        this.paginator = false;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this.onRowSelect = new EventEmitter();
        this.onRowUnselect = new EventEmitter();
        this.onPageChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bTableService.onRowSelectSubject.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            // console.log('table>onRowSelectSubject',value)
            this.onRowSelect.emit(value);
        }));
        this.bTableService.onRowUnselectSubject.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.onRowUnselect.emit(value);
        }));
        if (this.paginator) {
            this.initializePaginator();
        }
        this.checkInputs();
        //  console.log(this.paginator,this.rows,this.totalRecords,this.paginatorConfig)
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageSelect(page) {
        console.log(page);
        this.onPageChange.emit(page);
    }
    //========================================> INTERNAL FUNCTIONS <========================================
    /**
     * @private
     * @return {?}
     */
    initializePaginator() {
        if (!this.paginatorConfig) {
            //Default configuration
            this.pConfig = new PaginatorConfig();
            this.pConfig.sizing = Sizing.SMALL;
            this.pConfig.alignment = Alignment.RIGHT;
        }
        else {
            this.pConfig = this.paginatorConfig;
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkInputs() {
        if (!this.columns || !this.value) {
            throw new Error('Missing required properties! \'columns\' and \'value\' must be provided.');
        }
        if (this.paginator === true) {
            if (!this.rows || !this.totalRecords) {
                throw new Error('Missing required properties! \'rows\' and \'totalRecords\' must be provided if \'paginator\' is true.');
            }
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'b-table',
                template: "  <table *ngIf=\"header\" class=\"table\"\n    [class.table-striped]=\"striped\"\n    [class.table-bordered]=\"bordered\"\n    [class.table-borderless]=\"borderless\"\n    [class.table-hover]=\"hover\"\n    [class.table-sm]=\"small\"\n    [class.table-responsive]=\"responsive\"\n    [class.table-dark]=\"dark\"\n  >\n    <thead \n    [class.thead-light]=\"headLight\"\n    [class.thead-dark]=\"headDark\"\n    >\n      <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of value\">\n        <ng-container #body *ngTemplateOutlet=\"body;context: { $implicit: item }\"></ng-container>\n      </ng-container>\n    </tbody>\n  </table>\n  <div class=\"b-table-paginator-container\" *ngIf=\"paginator && rows>0 && value?.length>0\">\n    <b-paginator [totalRecords]=\"totalRecords\" [rows]=\"rows\" [config]=\"pConfig\" (onPageChange)=\"onPageSelect($event)\">\n    </b-paginator>\n  </div>",
                styles: [".b-table-container{margin-bottom:.25em}.b-table-container table{margin:0}.b-table-container table .b-table-header{background-color:#f5f5f5;color:#000;border-bottom:1px #d3d3d3}.b-table-container.b-table-fixed-head{overflow-y:auto}table{border-collapse:collapse;width:100%}td,th{padding:8px 16px}.b-table-paginator-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: BTableService }
];
TableComponent.propDecorators = {
    header: [{ type: ContentChild, args: [BHeaderDirective, { static: true, read: TemplateRef },] }],
    body: [{ type: ContentChild, args: [BBodyDirective, { static: true, read: TemplateRef },] }],
    value: [{ type: Input }],
    columns: [{ type: Input }],
    striped: [{ type: Input }],
    bordered: [{ type: Input }],
    borderless: [{ type: Input }],
    hover: [{ type: Input }],
    small: [{ type: Input }],
    dark: [{ type: Input }],
    headLight: [{ type: Input }],
    headDark: [{ type: Input }],
    paginator: [{ type: Input }],
    paginatorConfig: [{ type: Input }],
    rows: [{ type: Input }],
    totalRecords: [{ type: Input }],
    responsive: [{ type: Input }],
    stickyHeader: [{ type: Input }],
    stickyHeaderBgColor: [{ type: Input }],
    stickyHeaderTextColor: [{ type: Input }],
    onRowSelect: [{ type: Output }],
    onRowUnselect: [{ type: Output }],
    onPageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.ctx;
    /** @type {?} */
    TableComponent.prototype.pConfig;
    /** @type {?} */
    TableComponent.prototype.header;
    /** @type {?} */
    TableComponent.prototype.body;
    /** @type {?} */
    TableComponent.prototype.value;
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.striped;
    /** @type {?} */
    TableComponent.prototype.bordered;
    /** @type {?} */
    TableComponent.prototype.borderless;
    /** @type {?} */
    TableComponent.prototype.hover;
    /** @type {?} */
    TableComponent.prototype.small;
    /** @type {?} */
    TableComponent.prototype.dark;
    /** @type {?} */
    TableComponent.prototype.headLight;
    /** @type {?} */
    TableComponent.prototype.headDark;
    /** @type {?} */
    TableComponent.prototype.paginator;
    /** @type {?} */
    TableComponent.prototype.paginatorConfig;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.totalRecords;
    /** @type {?} */
    TableComponent.prototype.responsive;
    /** @type {?} */
    TableComponent.prototype.stickyHeader;
    /** @type {?} */
    TableComponent.prototype.stickyHeaderBgColor;
    /** @type {?} */
    TableComponent.prototype.stickyHeaderTextColor;
    /** @type {?} */
    TableComponent.prototype.onRowSelect;
    /** @type {?} */
    TableComponent.prototype.onRowUnselect;
    /** @type {?} */
    TableComponent.prototype.onPageChange;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.bTableService;
}
class BootstrapTableModule {
}
BootstrapTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    PaginatorModule
                ],
                exports: [TableComponent],
                declarations: [TableComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/b-selectable-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BRowEvent() { }
if (false) {
    /** @type {?} */
    BRowEvent.prototype.originalEvent;
    /** @type {?} */
    BRowEvent.prototype.data;
    /** @type {?} */
    BRowEvent.prototype.selected;
}
class BSelectableRowDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/directive.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BTableDirectivesModule {
}
BTableDirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BBodyDirective,
                    BHeaderDirective,
                    BSelectableRowDirective
                ],
                exports: [
                    BBodyDirective,
                    BHeaderDirective,
                    BSelectableRowDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-bootstrap-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBootstrapTableModule {
}
NgBootstrapTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BootstrapTableModule,
                    BTableDirectivesModule
                ],
                exports: [
                    BootstrapTableModule,
                    BTableDirectivesModule
                ],
                providers: [BTableService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/table-columns.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BTableColumn() { }
if (false) {
    /** @type {?} */
    BTableColumn.prototype.header;
    /** @type {?} */
    BTableColumn.prototype.field;
    /** @type {?|undefined} */
    BTableColumn.prototype.sortable;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-bootstrap-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BTableDirectivesModule, BTableService, NgBootstrapTableModule, TableComponent as ɵa, BootstrapTableModule as ɵb, PaginatorModule as ɵc, PaginatorComponent as ɵd, BHeaderDirective as ɵe, BBodyDirective as ɵf, BSelectableRowDirective as ɵg };
//# sourceMappingURL=ng-bootstrap-table.js.map
