import { TestBed } from '@angular/core/testing';

import { AdminsetdataService } from './adminsetdata.service';

describe('AdminsetdataService', () => {
  let service: AdminsetdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsetdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
