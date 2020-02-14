/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paginator.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PaginatorConfig {
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
export { Alignment };
/** @enum {string} */
const Sizing = {
    SMALL: "pagination-sm",
    LARGE: "pagination-lg",
};
export { Sizing };
export class PaginatorPage {
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
export function PageEvent() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wYWdpbmF0b3IubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUVJLGNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7Q0FBQTs7O0lBRkcsaUNBQWU7O0lBQ2Ysb0NBQXVDOzs7QUFHM0MsTUFBWSxTQUFTO0lBQ2pCLElBQUkseUJBQTBCO0lBQzlCLE1BQU0sMEJBQTJCO0lBQ2pDLEtBQUssdUJBQXdCO0VBQ2hDOzs7QUFFRCxNQUFZLE1BQU07SUFDZCxLQUFLLGlCQUFrQjtJQUN2QixLQUFLLGlCQUFrQjtFQUMxQjs7QUFFRCxNQUFNLE9BQU8sYUFBYTtDQU16Qjs7O0lBTEcscUNBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLGlDQUFpQjs7SUFDakIsaUNBQWtCOztJQUNsQiwrQkFBZ0I7Ozs7O0FBR3BCLCtCQVNDOzs7SUFSRyw2QkFBaUI7O0lBQ2pCLCtCQUFtQjs7SUFDbkIsaUNBQXFCOztJQUNyQixnQ0FBb0I7O0lBQ3BCLGlDQUFxQjs7SUFDckIsK0JBQW1COztJQUNuQiwwQkFBYzs7SUFDZCwyQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb25maWcge1xuICAgIHNpemluZzogU2l6aW5nO1xuICAgIGFsaWdubWVudDogQWxpZ25tZW50ID0gQWxpZ25tZW50LlJJR0hUO1xufVxuXG5leHBvcnQgZW51bSBBbGlnbm1lbnQge1xuICAgIExFRlQgPSBcImp1c3RpZnktY29udGVudC1zdGFydFwiLFxuICAgIENFTlRFUiA9IFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLFxuICAgIFJJR0hUID0gXCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcbn1cblxuZXhwb3J0IGVudW0gU2l6aW5nIHtcbiAgICBTTUFMTCA9IFwicGFnaW5hdGlvbi1zbVwiLFxuICAgIExBUkdFID0gXCJwYWdpbmF0aW9uLWxnXCJcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvclBhZ2Uge1xuICAgIHByZXZpb3VzUGFnZTogbnVtYmVyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgICBuZXh0UGFnZTogbnVtYmVyO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlRXZlbnQge1xuICAgIG5leHRQYWdlOiBudW1iZXI7XG4gICAgYWN0aXZlUGFnZTogbnVtYmVyO1xuICAgIHByZXZpb3VzUGFnZTogbnVtYmVyO1xuICAgIHJvd3NQZXJQYWdlOiBudW1iZXI7XG4gICAgdG90YWxSZWNvcmRzOiBudW1iZXI7XG4gICAgdG90YWxQYWdlczogbnVtYmVyO1xuICAgIGxpbWl0OiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59Il19