import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLaptop1Component } from './review-laptop1.component';

describe('ReviewLaptop1Component', () => {
  let component: ReviewLaptop1Component;
  let fixture: ComponentFixture<ReviewLaptop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLaptop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLaptop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
