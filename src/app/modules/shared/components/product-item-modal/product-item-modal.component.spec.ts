import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemModalComponent } from './product-item-modal.component';

describe('ProductItemModalComponent', () => {
  let component: ProductItemModalComponent;
  let fixture: ComponentFixture<ProductItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
