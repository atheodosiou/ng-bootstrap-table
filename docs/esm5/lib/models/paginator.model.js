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
export { PaginatorConfig };
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
export { Alignment };
/** @enum {string} */
var Sizing = {
    SMALL: "pagination-sm",
    LARGE: "pagination-lg",
};
export { Sizing };
var PaginatorPage = /** @class */ (function () {
    function PaginatorPage() {
    }
    return PaginatorPage;
}());
export { PaginatorPage };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wYWdpbmF0b3IubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO1FBRUksY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGRyxpQ0FBZTs7SUFDZixvQ0FBdUM7OztBQUczQyxJQUFZLFNBQVM7SUFDakIsSUFBSSx5QkFBMEI7SUFDOUIsTUFBTSwwQkFBMkI7SUFDakMsS0FBSyx1QkFBd0I7RUFDaEM7OztBQUVELElBQVksTUFBTTtJQUNkLEtBQUssaUJBQWtCO0lBQ3ZCLEtBQUssaUJBQWtCO0VBQzFCOztBQUVEO0lBQUE7SUFNQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxHLHFDQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixpQ0FBaUI7O0lBQ2pCLGlDQUFrQjs7SUFDbEIsK0JBQWdCOzs7OztBQUdwQiwrQkFTQzs7O0lBUkcsNkJBQWlCOztJQUNqQiwrQkFBbUI7O0lBQ25CLGlDQUFxQjs7SUFDckIsZ0NBQW9COztJQUNwQixpQ0FBcUI7O0lBQ3JCLCtCQUFtQjs7SUFDbkIsMEJBQWM7O0lBQ2QsMkJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlnIHtcbiAgICBzaXppbmc6IFNpemluZztcbiAgICBhbGlnbm1lbnQ6IEFsaWdubWVudCA9IEFsaWdubWVudC5SSUdIVDtcbn1cblxuZXhwb3J0IGVudW0gQWxpZ25tZW50IHtcbiAgICBMRUZUID0gXCJqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIixcbiAgICBDRU5URVIgPSBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIixcbiAgICBSSUdIVCA9IFwianVzdGlmeS1jb250ZW50LWVuZFwiXG59XG5cbmV4cG9ydCBlbnVtIFNpemluZyB7XG4gICAgU01BTEwgPSBcInBhZ2luYXRpb24tc21cIixcbiAgICBMQVJHRSA9IFwicGFnaW5hdGlvbi1sZ1wiXG59XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JQYWdlIHtcbiAgICBwcmV2aW91c1BhZ2U6IG51bWJlclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgbmV4dFBhZ2U6IG51bWJlcjtcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUV2ZW50IHtcbiAgICBuZXh0UGFnZTogbnVtYmVyO1xuICAgIGFjdGl2ZVBhZ2U6IG51bWJlcjtcbiAgICBwcmV2aW91c1BhZ2U6IG51bWJlcjtcbiAgICByb3dzUGVyUGFnZTogbnVtYmVyO1xuICAgIHRvdGFsUmVjb3JkczogbnVtYmVyO1xuICAgIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgICBsaW1pdDogbnVtYmVyO1xuICAgIG9mZnNldDogbnVtYmVyO1xufSJdfQ==