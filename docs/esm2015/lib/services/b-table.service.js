/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/b-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class BTableService {
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
/** @nocollapse */ BTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BTableService_Factory() { return new BTableService(); }, token: BTableService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ItdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLGFBQWE7SUFFeEI7O1FBR1Esd0JBQW1CLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDdkQsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFKakQsQ0FBQzs7Ozs7SUFPakIsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7OztZQWxCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFNQyw0Q0FBK0Q7Ozs7O0lBQy9ELDhDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQlRhYmxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvL1N1YmplY3RzIHRvIGhhbmRsZSBiLXRhYmxlIHJvdyBzZWxlY3QgYW5kIHVuc2VsZWN0IGFjdGlvbnNcbiAgcHJpdmF0ZSAkb25Sb3dTZWxlY3RTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgJG9uUm93VW5zZWxlY3RTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgLy9TdWJqZWN0IGdldHRlcnNcbiAgZ2V0IG9uUm93U2VsZWN0U3ViamVjdCgpOiBTdWJqZWN0PGFueT4ge1xuICAgIHJldHVybiB0aGlzLiRvblJvd1NlbGVjdFN1YmplY3Q7XG4gIH1cblxuICBnZXQgb25Sb3dVbnNlbGVjdFN1YmplY3QoKTogU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy4kb25Sb3dVbnNlbGVjdFN1YmplY3Q7XG4gIH1cblxufVxuIl19