import { TestBed } from '@angular/core/testing';

import { LocalDeliveryGuardService } from './local-delivery-guard.service';

describe('LocalDeliveryGuardService', () => {
  let service: LocalDeliveryGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDeliveryGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
