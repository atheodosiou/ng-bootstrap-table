/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BTableService } from './b-table.service';

describe('Service: BTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BTableService]
    });
  });

  it('should ...', inject([BTableService], (service: BTableService) => {
    expect(service).toBeTruthy();
  }));
});
