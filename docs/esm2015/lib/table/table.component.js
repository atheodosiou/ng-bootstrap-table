/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
export class TableComponent {
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
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from '../paginator/paginator.module';
import { BHeaderDirective } from '../directives/b-header.directive';
import { BBodyDirective } from '../directives/b-body.directive';
import { BTableService } from '../services/b-table.service';
import { PaginatorConfig, Sizing, Alignment } from '../models/paginator.model';
export class BootstrapTableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFPL0gsTUFBTSxPQUFPLGNBQWM7Ozs7SUFnQ3pCLFlBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBYnRDLGNBQVMsR0FBUyxLQUFLLENBQUM7UUFLeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQU9sQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQSxFQUFFO1lBQ3JELGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFD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QUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQVcxRixNQUFNLE9BQU8sb0JBQW9COzs7WUFUaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUN6QixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9jb250ZXh0XG4gIGN0eDtcbiAgcENvbmZpZzpQYWdpbmF0b3JDb25maWc7XG4gIFxuICBAQ29udGVudENoaWxkKEJIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBoZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoQkJvZHlEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBib2R5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHZhbHVlOmFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcblxuICBASW5wdXQoKSBzdHJpcGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBib3JkZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYm9yZGVybGVzczogYm9vbGVhbjtcbiAgQElucHV0KCkgaG92ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNtYWxsOiBib29sZWFuO1xuICBASW5wdXQoKSBkYXJrOmJvb2xlYW47XG4gIEBJbnB1dCgpIGhlYWRMaWdodDpib29sZWFuO1xuICBASW5wdXQoKSBoZWFkRGFyazpib29sZWFuO1xuICBASW5wdXQoKSBwYWdpbmF0b3I6Ym9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdG9yQ29uZmlnOlBhZ2luYXRvckNvbmZpZztcbiAgQElucHV0KCkgcm93czpudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsUmVjb3JkczpudW1iZXI7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlclRleHRDb2xvciA9ICcnO1xuXG4gIEBPdXRwdXQoKSBvblJvd1NlbGVjdDpFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIG9uUm93VW5zZWxlY3Q6RXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBvblBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPFBhZ2VFdmVudD5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJUYWJsZVNlcnZpY2U6QlRhYmxlU2VydmljZSkge1xuICAgIHRoaXMub25Sb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICB0aGlzLm9uUm93VW5zZWxlY3Q9bmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2U9bmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+KCk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYlRhYmxlU2VydmljZS5vblJvd1NlbGVjdFN1YmplY3Quc3Vic2NyaWJlKHZhbHVlPT57XG4gICAgICAvLyBjb25zb2xlLmxvZygndGFibGU+b25Sb3dTZWxlY3RTdWJqZWN0Jyx2YWx1ZSlcbiAgICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgfSlcbiAgICB0aGlzLmJUYWJsZVNlcnZpY2Uub25Sb3dVbnNlbGVjdFN1YmplY3Quc3Vic2NyaWJlKHZhbHVlPT57XG4gICAgICB0aGlzLm9uUm93VW5zZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgfSlcbiAgICBpZih0aGlzLnBhZ2luYXRvcil7XG4gICAgICB0aGlzLmluaXRpYWxpemVQYWdpbmF0b3IoKTtcbiAgICB9XG4gICAgIHRoaXMuY2hlY2tJbnB1dHMoKTtcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5wYWdpbmF0b3IsdGhpcy5yb3dzLHRoaXMudG90YWxSZWNvcmRzLHRoaXMucGFnaW5hdG9yQ29uZmlnKVxuICB9XG5cbiAgb25QYWdlU2VsZWN0KHBhZ2U6UGFnZUV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhwYWdlKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PiBJTlRFUk5BTCBGVU5DVElPTlMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHJpdmF0ZSBpbml0aWFsaXplUGFnaW5hdG9yKCl7XG4gICAgaWYoIXRoaXMucGFnaW5hdG9yQ29uZmlnKXtcbiAgICAgIC8vRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICB0aGlzLnBDb25maWc9bmV3IFBhZ2luYXRvckNvbmZpZygpO1xuICAgICAgdGhpcy5wQ29uZmlnLnNpemluZz1TaXppbmcuU01BTEw7XG4gICAgICB0aGlzLnBDb25maWcuYWxpZ25tZW50PUFsaWdubWVudC5SSUdIVDtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMucENvbmZpZyA9IHRoaXMucGFnaW5hdG9yQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJbnB1dHMoKXtcbiAgICBpZighdGhpcy5jb2x1bW5zIHx8ICF0aGlzLnZhbHVlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0aWVzISBcXCdjb2x1bW5zXFwnIGFuZCBcXCd2YWx1ZVxcJyBtdXN0IGJlIHByb3ZpZGVkLicpXG4gICAgfVxuXG4gICAgaWYodGhpcy5wYWdpbmF0b3IgPT09IHRydWUpe1xuICAgICAgaWYoIXRoaXMucm93cyB8fCAhdGhpcy50b3RhbFJlY29yZHMpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcHJvcGVydGllcyEgXFwncm93c1xcJyBhbmQgXFwndG90YWxSZWNvcmRzXFwnIG11c3QgYmUgcHJvdmlkZWQgaWYgXFwncGFnaW5hdG9yXFwnIGlzIHRydWUuJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICcuLi9wYWdpbmF0b3IvcGFnaW5hdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBCSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9iLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQkJvZHlEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2ItYm9keS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQlRhYmxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ItdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmF0b3JDb25maWcsIFNpemluZywgQWxpZ25tZW50LCBQYWdlRXZlbnQgfSBmcm9tICcuLi9tb2RlbHMvcGFnaW5hdG9yLm1vZGVsJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQYWdpbmF0b3JNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRhYmxlTW9kdWxlIHsgfSJdfQ==