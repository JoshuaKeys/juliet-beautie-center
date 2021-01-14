import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationQuestionComponent } from './location-question.component';

describe('LocationQuestionComponent', () => {
  let component: LocationQuestionComponent;
  let fixture: ComponentFixture<LocationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
