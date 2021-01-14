import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToCheckoutComponent } from './welcome-to-checkout.component';

describe('WelcomeToCheckoutComponent', () => {
  let component: WelcomeToCheckoutComponent;
  let fixture: ComponentFixture<WelcomeToCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
