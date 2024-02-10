import { TestBed } from '@angular/core/testing';

import { RequestMainService } from './request-main.service';

describe('RequestMainService', () => {
  let service: RequestMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
