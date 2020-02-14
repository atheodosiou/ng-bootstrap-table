import { NgModule } from "@angular/core";
import { BBodyDirective } from './b-body.directive';
import { BHeaderDirective } from './b-header.directive';
import { BSelectableRowDirective } from './b-selectable-row.directive';

@NgModule({
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
})
export class BTableDirectivesModule { }