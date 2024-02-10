import { TestBed } from '@angular/core/testing';

import { LocumTypeService } from './locum-type.service';

describe('LocumTypeService', () => {
  let service: LocumTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocumTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
