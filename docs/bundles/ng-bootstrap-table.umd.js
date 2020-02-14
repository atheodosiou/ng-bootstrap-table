(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-bootstrap-table', ['exports', '@angular/core', '@angular/forms', '@angular/common', 'rxjs'], factory) :
    (global = global || self, factory(global['ng-bootstrap-table'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.rxjs));
}(this, (function (exports, core, forms, common, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/paginator.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaginatorConfig = /** @class */ (function () {
        function PaginatorConfig() {
            this.alignment = Alignment.RIGHT;
        }
        return PaginatorConfig;
    }());
    if (false) {
        /** @type {?} */
        PaginatorConfig.prototype.sizing;
        /** @type {?} */
        PaginatorConfig.prototype.alignment;
    }
    /** @enum {string} */
    var Alignment = {
        LEFT: "justify-content-start",
        CENTER: "justify-content-center",
        RIGHT: "justify-content-end",
    };
    /** @enum {string} */
    var Sizing = {
        SMALL: "pagination-sm",
        LARGE: "pagination-lg",
    };
    var PaginatorPage = /** @class */ (function () {
        function PaginatorPage() {
        }
        return PaginatorPage;
    }());
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
    var PaginatorComponent = /** @class */ (function () {
        function PaginatorComponent() {
            this._first = 0;
            this._activePage = 1;
            this.onPageChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'b-paginator',
                        template: "<div *ngIf=\"_pages?.length\" class=\"d-flex w-100\">\n  <ng-container *ngTemplateOutlet=\"paginator_template\"></ng-container>\n</div>\n\n\n<!-- <ng-template #default>\n  <nav>\n    <ul class=\"pagination\"\n    [class.pagination-sm]=\"_config?.sizing==='pagination-sm'\"\n    [class.pagination-lg]=\"_config?.sizing==='pagination-lg'\"\n    [class.justify-content-start]=\"_config?.alignment==='justify-content-start'\"\n    [class.justify-content-center]=\"_config?.alignment==='justify-content-center'\"\n    [class.justify-content-end]=\"_config?.alignment==='justify-content-end'\"\n    >\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"_activePage=1\">\n        <span aria-hidden=\"true\"><<</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(_activePage-1)\">\n          <span aria-hidden=\"true\"><</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage-1].number)\">{{_pages[_activePage-1].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage-1].number)\">{{_pages[_activePage-1].number}}</a>\n      </li>\n\n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage].number)\">{{_pages[_activePage].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage].number)\">{{_pages[_activePage].number}}</a>\n      </li>\n      \n      <li class=\"page-item\">\n        <a *ngIf=\"_activePage!==(_pages.length-2)\" class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">{{_pages[_activePage+1].number}}</a>\n        <a *ngIf=\"_activePage===(_pages.length-2)\" class=\"page-link\" (click)=\"setLastPages(_pages[_activePage+1].number)\">{{_pages[_activePage+1].number}}</a>\n      </li>\n      \n      <li class=\"page-item disabled\" *ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\"><a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">...</a></li>\n      <li class=\"page-item\"*ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\"><a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">{{_pages[_pages.length-2].number}}</a></li>\n      <li class=\"page-item\" *ngIf=\"_activePage!==(_pages.length-2) && _activePage!==(_pages.length-1) && _activePage!==(_pages.length)\">\n        <a class=\"page-link\" (click)=\"setPage(_pages[_activePage+1].number)\">\n          {{_pages[_pages.length-1].number}}\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===(_pages.length-2)\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_activePage+1)\">\n          <span aria-hidden=\"true\">></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===(_pages.length - 2)\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"_activePage=_pages.length\">\n          <span aria-hidden=\"true\">>></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</ng-template> -->\n\n<ng-template #paginator_template>\n  <nav aria-label=\"paginator\">\n    <ul class=\"pagination\"\n    [class.pagination-sm]=\"_config?.sizing==='pagination-sm'\"\n    [class.pagination-lg]=\"_config?.sizing==='pagination-lg'\"\n    [class.justify-content-start]=\"_config?.alignment==='justify-content-start'\"\n    [class.justify-content-center]=\"_config?.alignment==='justify-content-center'\"\n    [class.justify-content-end]=\"_config?.alignment==='justify-content-end'\"\n    >\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(1)\">\n        <span aria-hidden=\"true\">First</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\" [class.disabled]=\"_activePage===1\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" (click)=\"setPage(_activePage-1)\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n      <li class=\"page-item\">\n        <span class=\"page-link\" style=\"color: black;\">\n          Page <span style=\"font-weight: bold;\">{{_activePage}}</span> from {{_pages?.length}}\n        </span>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===_pages.length\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_activePage+1)\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"_activePage===_pages.length\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\" (click)=\"setPage(_pages.length)\">\n          <span aria-hidden=\"true\">Last</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</ng-template>",
                        styles: [":host{width:100%}:host nav{width:100%}:host nav ul{margin:0}"]
                    }] }
        ];
        PaginatorComponent.propDecorators = {
            rows: [{ type: core.Input }],
            totalRecords: [{ type: core.Input }],
            config: [{ type: core.Input }],
            onPageChange: [{ type: core.Output }]
        };
        return PaginatorComponent;
    }());
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
    var PaginatorModule = /** @class */ (function () {
        function PaginatorModule() {
        }
        PaginatorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        exports: [PaginatorComponent],
                        declarations: [PaginatorComponent]
                    },] }
        ];
        return PaginatorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/b-header.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BHeaderDirective = /** @class */ (function () {
        function BHeaderDirective() {
        }
        BHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bTemplate="header"]'
                    },] }
        ];
        /** @nocollapse */
        BHeaderDirective.ctorParameters = function () { return []; };
        return BHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/b-body.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BBodyDirective = /** @class */ (function () {
        function BBodyDirective() {
        }
        BBodyDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bTemplate="body"]'
                    },] }
        ];
        BBodyDirective.propDecorators = {
            template: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }]
        };
        return BBodyDirective;
    }());
    if (false) {
        /** @type {?} */
        BBodyDirective.prototype.template;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/b-table.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BTableService = /** @class */ (function () {
        function BTableService() {
            //Subjects to handle b-table row select and unselect actions
            this.$onRowSelectSubject = new rxjs.Subject();
            this.$onRowUnselectSubject = new rxjs.Subject();
        }
        Object.defineProperty(BTableService.prototype, "onRowSelectSubject", {
            //Subject getters
            get: 
            //Subject getters
            /**
             * @return {?}
             */
            function () {
                return this.$onRowSelectSubject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BTableService.prototype, "onRowUnselectSubject", {
            get: /**
             * @return {?}
             */
            function () {
                return this.$onRowUnselectSubject;
            },
            enumerable: true,
            configurable: true
        });
        BTableService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ BTableService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BTableService_Factory() { return new BTableService(); }, token: BTableService, providedIn: "root" });
        return BTableService;
    }());
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
    var TableComponent = /** @class */ (function () {
        function TableComponent(bTableService) {
            this.bTableService = bTableService;
            this.paginator = false;
            this.stickyHeader = false;
            this.stickyHeaderBgColor = '';
            this.stickyHeaderTextColor = '';
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onPageChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.bTableService.onRowSelectSubject.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // console.log('table>onRowSelectSubject',value)
                _this.onRowSelect.emit(value);
            }));
            this.bTableService.onRowUnselectSubject.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.onRowUnselect.emit(value);
            }));
            if (this.paginator) {
                this.initializePaginator();
            }
            this.checkInputs();
            //  console.log(this.paginator,this.rows,this.totalRecords,this.paginatorConfig)
        };
        /**
         * @param {?} page
         * @return {?}
         */
        TableComponent.prototype.onPageSelect = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            console.log(page);
            this.onPageChange.emit(page);
        };
        //========================================> INTERNAL FUNCTIONS <========================================
        //========================================> INTERNAL FUNCTIONS <========================================
        /**
         * @private
         * @return {?}
         */
        TableComponent.prototype.initializePaginator = 
        //========================================> INTERNAL FUNCTIONS <========================================
        /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.paginatorConfig) {
                //Default configuration
                this.pConfig = new PaginatorConfig();
                this.pConfig.sizing = Sizing.SMALL;
                this.pConfig.alignment = Alignment.RIGHT;
            }
            else {
                this.pConfig = this.paginatorConfig;
            }
        };
        /**
         * @private
         * @return {?}
         */
        TableComponent.prototype.checkInputs = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.columns || !this.value) {
                throw new Error('Missing required properties! \'columns\' and \'value\' must be provided.');
            }
            if (this.paginator === true) {
                if (!this.rows || !this.totalRecords) {
                    throw new Error('Missing required properties! \'rows\' and \'totalRecords\' must be provided if \'paginator\' is true.');
                }
            }
        };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'b-table',
                        template: "  <table *ngIf=\"header\" class=\"table\"\n    [class.table-striped]=\"striped\"\n    [class.table-bordered]=\"bordered\"\n    [class.table-borderless]=\"borderless\"\n    [class.table-hover]=\"hover\"\n    [class.table-sm]=\"small\"\n    [class.table-responsive]=\"responsive\"\n    [class.table-dark]=\"dark\"\n  >\n    <thead \n    [class.thead-light]=\"headLight\"\n    [class.thead-dark]=\"headDark\"\n    >\n      <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of value\">\n        <ng-container #body *ngTemplateOutlet=\"body;context: { $implicit: item }\"></ng-container>\n      </ng-container>\n    </tbody>\n  </table>\n  <div class=\"b-table-paginator-container\" *ngIf=\"paginator && rows>0 && value?.length>0\">\n    <b-paginator [totalRecords]=\"totalRecords\" [rows]=\"rows\" [config]=\"pConfig\" (onPageChange)=\"onPageSelect($event)\">\n    </b-paginator>\n  </div>",
                        styles: [".b-table-container{margin-bottom:.25em}.b-table-container table{margin:0}.b-table-container table .b-table-header{background-color:#f5f5f5;color:#000;border-bottom:1px #d3d3d3}.b-table-container.b-table-fixed-head{overflow-y:auto}table{border-collapse:collapse;width:100%}td,th{padding:8px 16px}.b-table-paginator-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}"]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () { return [
            { type: BTableService }
        ]; };
        TableComponent.propDecorators = {
            header: [{ type: core.ContentChild, args: [BHeaderDirective, { static: true, read: core.TemplateRef },] }],
            body: [{ type: core.ContentChild, args: [BBodyDirective, { static: true, read: core.TemplateRef },] }],
            value: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            striped: [{ type: core.Input }],
            bordered: [{ type: core.Input }],
            borderless: [{ type: core.Input }],
            hover: [{ type: core.Input }],
            small: [{ type: core.Input }],
            dark: [{ type: core.Input }],
            headLight: [{ type: core.Input }],
            headDark: [{ type: core.Input }],
            paginator: [{ type: core.Input }],
            paginatorConfig: [{ type: core.Input }],
            rows: [{ type: core.Input }],
            totalRecords: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            stickyHeader: [{ type: core.Input }],
            stickyHeaderBgColor: [{ type: core.Input }],
            stickyHeaderTextColor: [{ type: core.Input }],
            onRowSelect: [{ type: core.Output }],
            onRowUnselect: [{ type: core.Output }],
            onPageChange: [{ type: core.Output }]
        };
        return TableComponent;
    }());
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
    var BootstrapTableModule = /** @class */ (function () {
        function BootstrapTableModule() {
        }
        BootstrapTableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            PaginatorModule
                        ],
                        exports: [TableComponent],
                        declarations: [TableComponent]
                    },] }
        ];
        return BootstrapTableModule;
    }());

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
    var BSelectableRowDirective = /** @class */ (function () {
        function BSelectableRowDirective(bTableService, renderer, hostElement) {
            this.bTableService = bTableService;
            this.renderer = renderer;
            this.hostElement = hostElement;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BSelectableRowDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.selectUnSelectRow(event);
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        BSelectableRowDirective.prototype.selectUnSelectRow = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // console.log(event)
            // console.log(this.hostElement.nativeElement)
            // console.log(event)
            // console.log(this.hostElement.nativeElement)
            /** @type {?} */
            var rowEvent = { originalEvent: event, data: this.bSelectableRow, selected: false };
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
        };
        BSelectableRowDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bSelectableRow]'
                    },] }
        ];
        /** @nocollapse */
        BSelectableRowDirective.ctorParameters = function () { return [
            { type: BTableService },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        BSelectableRowDirective.propDecorators = {
            bSelectableRow: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return BSelectableRowDirective;
    }());
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
    var BTableDirectivesModule = /** @class */ (function () {
        function BTableDirectivesModule() {
        }
        BTableDirectivesModule.decorators = [
            { type: core.NgModule, args: [{
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
        return BTableDirectivesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-bootstrap-table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgBootstrapTableModule = /** @class */ (function () {
        function NgBootstrapTableModule() {
        }
        NgBootstrapTableModule.decorators = [
            { type: core.NgModule, args: [{
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
        return NgBootstrapTableModule;
    }());

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

    exports.BTableDirectivesModule = BTableDirectivesModule;
    exports.BTableService = BTableService;
    exports.NgBootstrapTableModule = NgBootstrapTableModule;
    exports.ɵa = TableComponent;
    exports.ɵb = BootstrapTableModule;
    exports.ɵc = PaginatorModule;
    exports.ɵd = PaginatorComponent;
    exports.ɵe = BHeaderDirective;
    exports.ɵf = BBodyDirective;
    exports.ɵg = BSelectableRowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-bootstrap-table.umd.js.map
