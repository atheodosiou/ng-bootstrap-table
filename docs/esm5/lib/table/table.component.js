/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent(bTableService) {
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
        { type: Component, args: [{
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
    return TableComponent;
}());
export { TableComponent };
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
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '../paginator/paginator.module';
import { BHeaderDirective } from '../directives/b-header.directive';
import { BBodyDirective } from '../directives/b-body.directive';
import { BTableService } from '../services/b-table.service';
import { PaginatorConfig, Sizing, Alignment } from '../models/paginator.model';
var BootstrapTableModule = /** @class */ (function () {
    function BootstrapTableModule() {
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
    return BootstrapTableModule;
}());
export { BootstrapTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFL0g7SUFxQ0Usd0JBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBYnRDLGNBQVMsR0FBUyxLQUFLLENBQUM7UUFLeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQU9sQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbkQsZ0RBQWdEO1lBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3JELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLElB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TyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBRTFGO0lBQUE7SUFTb0MsQ0FBQzs7Z0JBVHBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMvQjs7SUFDbUMsMkJBQUM7Q0FBQSxBQVRyQyxJQVNxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9jb250ZXh0XG4gIGN0eDtcbiAgcENvbmZpZzpQYWdpbmF0b3JDb25maWc7XG4gIFxuICBAQ29udGVudENoaWxkKEJIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBoZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoQkJvZHlEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBib2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHZhbHVlOmFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcblxuICBASW5wdXQoKSBzdHJpcGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBib3JkZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYm9yZGVybGVzczogYm9vbGVhbjtcbiAgQElucHV0KCkgaG92ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNtYWxsOiBib29sZWFuO1xuICBASW5wdXQoKSBkYXJrOmJvb2xlYW47XG4gIEBJbnB1dCgpIGhlYWRMaWdodDpib29sZWFuO1xuICBASW5wdXQoKSBoZWFkRGFyazpib29sZWFuO1xuICBASW5wdXQoKSBwYWdpbmF0b3I6Ym9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdG9yQ29uZmlnOlBhZ2luYXRvckNvbmZpZztcbiAgQElucHV0KCkgcm93czpudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsUmVjb3JkczpudW1iZXI7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlclRleHRDb2xvciA9ICcnO1xuXG4gIEBPdXRwdXQoKSBvblJvd1NlbGVjdDpFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIG9uUm93VW5zZWxlY3Q6RXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBvblBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPFBhZ2VFdmVudD5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJUYWJsZVNlcnZpY2U6QlRhYmxlU2VydmljZSkge1xuICAgIHRoaXMub25Sb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICB0aGlzLm9uUm93VW5zZWxlY3Q9bmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2U9bmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+KCk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYlRhYmxlU2VydmljZS5vblJvd1NlbGVjdFN1YmplY3Quc3Vic2NyaWJlKHZhbHVlPT57XG4gICAgICAvLyBjb25zb2xlLmxvZygndGFibGU+b25Sb3dTZWxlY3RTdWJqZWN0Jyx2YWx1ZSlcbiAgICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgfSlcbiAgICB0aGlzLmJUYWJsZVNlcnZpY2Uub25Sb3dVbnNlbGVjdFN1YmplY3Quc3Vic2NyaWJlKHZhbHVlPT57XG4gICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgfSlcbiAgICBpZih0aGlzLnBhZ2luYXRvcil7XG4gICAgICB0aGlzLmluaXRpYWxpemVQYWdpbmF0b3IoKTtcbiAgICB9XG4gICAgIHRoaXMuY2hlY2tJbnB1dHMoKTtcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5wYWdpbmF0b3IsdGhpcy5yb3dzLHRoaXMudG90YWxSZWNvcmRzLHRoaXMucGFnaW5hdG9yQ29uZmlnKVxuICB9XG5cbiAgb25QYWdlU2VsZWN0KHBhZ2U6UGFnZUV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhwYWdlKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PiBJTlRFUk5BTCBGVU5DVElPTlMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHJpdmF0ZSBpbml0aWFsaXplUGFnaW5hdG9yKCl7XG4gICAgaWYoIXRoaXMucGFnaW5hdG9yQ29uZmlnKXtcbiAgICAgIC8vRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICB0aGlzLnBDb25maWc9bmV3IFBhZ2luYXRvckNvbmZpZygpO1xuICAgICAgdGhpcy5wQ29uZmlnLnNpemluZz1TaXppbmcuU01BTEw7XG4gICAgICB0aGlzLnBDb25maWcuYWxpZ25tZW50PUFsaWdubWVudC5SSUdIVDtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucENvbmZpZyA9IHRoaXMucGFnaW5hdG9yQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJbnB1dHMoKXtcbiAgICBpZighdGhpcy5jb2x1bW5zIHx8ICF0aGlzLnZhbHVlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0aWVzISBcXCdjb2x1bW5zXFwnIGFuZCBcXCd2YWx1ZVxcJyBtdXN0IGJlIHByb3ZpZGVkLicpXG4gICAgfVxuXG4gICAgaWYodGhpcy5wYWdpbmF0b3IgPT09IHRydWUpe1xuICAgICAgaWYoIXRoaXMucm93cyB8fCAhdGhpcy50b3RhbFJlY29yZHMpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydGllcyEgXFwncm93c1xcJyBhbmQgXFwndG90YWxSZWNvcmRzXFwnIG11c3QgYmUgcHJvdmlkZWQgaWYgXFwncGFnaW5hdG9yXFwnIGlzIHRydWUuJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICcuLi9wYWdpbmF0b3IvcGFnaW5hdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBCSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9iLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQkJvZHlEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2ItYm9keS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQlRhYmxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ItdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmF0b3JDb25maWcsIFNpemluZywgQWxpZ25tZW50LCBQYWdlRXZlbnQgfSBmcm9tICcuLi9tb2RlbHMvcGFnaW5hdG9yLm1vZGVsJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQYWdpbmF0b3JNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRhYmxlTW9kdWxlIHsgfSJdfQ==