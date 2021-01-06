import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoItemComponent } from './what-we-do-item.component';

describe('WhatWeDoItemComponent', () => {
  let component: WhatWeDoItemComponent;
  let fixture: ComponentFixture<WhatWeDoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
