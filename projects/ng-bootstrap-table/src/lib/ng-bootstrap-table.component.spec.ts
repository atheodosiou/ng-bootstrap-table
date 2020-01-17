import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTableComponent } from './ng-bootstrap-table.component';

describe('NgBootstrapTableComponent', () => {
  let component: NgBootstrapTableComponent;
  let fixture: ComponentFixture<NgBootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
