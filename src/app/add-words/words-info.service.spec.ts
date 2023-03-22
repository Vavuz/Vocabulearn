import { TestBed } from '@angular/core/testing';

import { WordsInfoService } from './words-info.service';

describe('WordsInfoService', () => {
  let service: WordsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
