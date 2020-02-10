import { TestBed, async } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { FormsModule } from '@angular/forms';

describe('Table Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableComponent
            ],
            imports: [
                FormsModule,
                PaginatorModule
            ]
        }).compileComponents();
    }));

    it('should created', () => {
        const fixture = TestBed.createComponent(TableComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
});
