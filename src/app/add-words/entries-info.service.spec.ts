import { TestBed } from '@angular/core/testing';

import { EntriesInfoService } from './entries-info.service';

describe('EntriesInfoService', () => {
  let service: EntriesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntriesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
