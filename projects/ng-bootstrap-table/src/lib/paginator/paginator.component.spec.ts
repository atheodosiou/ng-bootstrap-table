import { TestBed, async } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('Paginator Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaginatorComponent
            ],
            imports: [
                CommonModule
            ]
        }).compileComponents();
    }));

    it('Should be created', () => {
        const fixture = TestBed.createComponent(PaginatorComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it('Testing getPagesNumber()...', () => {
        const testCases = [
            { totalRecords: 100, rowsPerPage: 10, totalPages: 10 },
            { totalRecords: 1301, rowsPerPage: 21, totalPages: 62 },
            { totalRecords: 9, rowsPerPage: 1, totalPages: 9 },
            { totalRecords: 14, rowsPerPage: 7, totalPages: 2 },
        ];
        const fixture = TestBed.createComponent(PaginatorComponent);
        const component = fixture.debugElement.componentInstance;

        testCases.forEach(testCase => {
            const numOfPages = component['getPagesNumber'](testCase.totalRecords, testCase.rowsPerPage);
            expect(numOfPages).toBe(testCase.totalPages);
        });
    })

    it('Testing createPageEvent() for multiple values...', () => {
        const fixture = TestBed.createComponent(PaginatorComponent);
        const component = fixture.debugElement.componentInstance;
        component.totalRecords = 100;
        component.rows = 10;
        component['ngOnInit']();
        console.log("NumOfPages:", component._numOfPages)
        const testCases = [
            { page: 1, nextPage: 2, activePage: 1, previousPage: null, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (1*component.rows)-component.rows },
            { page: 3, nextPage: 4, activePage: 3, previousPage: 2, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (3*component.rows)-component.rows },
            { page: 5, nextPage: 6, activePage: 5, previousPage: 4, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (5*component.rows)-component.rows },
            { page: 7, nextPage: 8, activePage: 7, previousPage: 6, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (7*component.rows)-component.rows },
            { page: 9, nextPage: 10, activePage: 9, previousPage: 8, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (9*component.rows)-component.rows },
            { page: 10, nextPage: null, activePage: 10, previousPage: 9, rowsPerPage: component.rows, totalRecords: component.totalRecords, totalPages: component._numOfPages, limit: component.rows, offset: (10*component.rows)-component.rows }
        ];

        testCases.forEach(testCase => {
            const pageEvent = component['createPageEvent'](testCase.page);
            expect(pageEvent.activePage).toBe(testCase.activePage);
            expect(pageEvent.nextPage).toBe(testCase.nextPage);
            expect(pageEvent.previousPage).toBe(testCase.previousPage);
            expect(pageEvent.rowsPerPage).toBe(testCase.rowsPerPage);
            expect(pageEvent.totalRecords).toBe(testCase.totalRecords);
            expect(pageEvent.totalPages).toBe(testCase.totalPages);
            expect(pageEvent.limit).toBe(testCase.limit);
            expect(pageEvent.offset).toBe(testCase.offset);
        });
    });
});
