import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDeliveryComponent } from './local-delivery.component';

describe('LocalDeliveryComponent', () => {
  let component: LocalDeliveryComponent;
  let fixture: ComponentFixture<LocalDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
