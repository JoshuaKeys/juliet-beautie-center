import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUtilitiesComponent } from './product-utilities.component';

describe('ProductUtilitiesComponent', () => {
  let component: ProductUtilitiesComponent;
  let fixture: ComponentFixture<ProductUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUtilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
