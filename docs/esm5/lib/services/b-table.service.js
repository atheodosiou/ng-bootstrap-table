/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/b-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var BTableService = /** @class */ (function () {
    function BTableService() {
        //Subjects to handle b-table row select and unselect actions
        this.$onRowSelectSubject = new Subject();
        this.$onRowUnselectSubject = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ BTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BTableService_Factory() { return new BTableService(); }, token: BTableService, providedIn: "root" });
    return BTableService;
}());
export { BTableService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ItdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFLRTs7UUFHUSx3QkFBbUIsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2RCwwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUpqRCxDQUFDO0lBT2pCLHNCQUFJLDZDQUFrQjtRQUR0QixpQkFBaUI7Ozs7OztRQUNqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0NBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt3QkFMRDtDQXVCQyxBQXBCRCxJQW9CQztTQWpCWSxhQUFhOzs7Ozs7SUFLeEIsNENBQStEOzs7OztJQUMvRCw4Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJUYWJsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy9TdWJqZWN0cyB0byBoYW5kbGUgYi10YWJsZSByb3cgc2VsZWN0IGFuZCB1bnNlbGVjdCBhY3Rpb25zXG4gIHByaXZhdGUgJG9uUm93U2VsZWN0U3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlICRvblJvd1Vuc2VsZWN0U3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8vU3ViamVjdCBnZXR0ZXJzXG4gIGdldCBvblJvd1NlbGVjdFN1YmplY3QoKTogU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy4kb25Sb3dTZWxlY3RTdWJqZWN0O1xuICB9XG5cbiAgZ2V0IG9uUm93VW5zZWxlY3RTdWJqZWN0KCk6IFN1YmplY3Q8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuJG9uUm93VW5zZWxlY3RTdWJqZWN0O1xuICB9XG5cbn1cbiJdfQ==