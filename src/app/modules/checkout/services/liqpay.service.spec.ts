import { TestBed } from '@angular/core/testing';

import { LiqpayService } from './liqpay.service';

describe('LiqpayService', () => {
  let service: LiqpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiqpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
