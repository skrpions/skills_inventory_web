import { TestBed } from '@angular/core/testing';

import { DevTableService } from './dev-table.service';

describe('DevTableService', () => {
  let service: DevTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
