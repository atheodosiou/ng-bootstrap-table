import { TestBed } from '@angular/core/testing';

import { NgBootstrapTableService } from './ng-bootstrap-table.service';

describe('NgBootstrapTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBootstrapTableService = TestBed.get(NgBootstrapTableService);
    expect(service).toBeTruthy();
  });
});
