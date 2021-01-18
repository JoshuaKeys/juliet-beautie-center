import { TestBed } from '@angular/core/testing';

import { DetailsConfirmationGuardService } from './details-confirmation-guard.service';

describe('DetailsConfirmationGuardService', () => {
  let service: DetailsConfirmationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsConfirmationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
