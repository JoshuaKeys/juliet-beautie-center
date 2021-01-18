import { TestBed } from '@angular/core/testing';

import { ContactDetailsGuardService } from './contact-details-guard.service';

describe('ContactDetails.GuardService', () => {
  let service: ContactDetailsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDetailsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
