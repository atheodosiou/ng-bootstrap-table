import { TestBed, async } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { FormsModule } from '@angular/forms';
import { dummyResponse, dummyColumns } from '../models/test.data';

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

    it('Validate input properties (columns, value, paginator, rows, and totalRecords)', () => {
        const fixture = TestBed.createComponent(TableComponent);
        const component = fixture.debugElement.componentInstance;
        component.columns = dummyColumns;

        // component.value= dummyResponse;

        try {
            component['ngOnInit']();
        } catch (error) {
            expect(error.message).toBe('Missing required properties! \'columns\' and \'value\' must be provided.');
        }

        component.columns = null;
        component.value = dummyResponse;

        try {
            component['ngOnInit']();
        } catch (error) {
            expect(error.message).toBe('Missing required properties! \'columns\' and \'value\' must be provided.');
        }

        component.value = dummyResponse;
        component.columns=dummyColumns;

        component.paginator = true;

        try {
            component['ngOnInit']();
        } catch (error) {
            expect(error.message).toBe('Missing required properties! \'rows\' and \'totalRecords\' must be provided if \'paginator\' is true.')
        }
    });
});
