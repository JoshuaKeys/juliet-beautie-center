import { TestBed } from '@angular/core/testing';

import { LocationQuestionGuardService } from './location-question-guard.service';

describe('LocationQuestionGuardService', () => {
  let service: LocationQuestionGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationQuestionGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
