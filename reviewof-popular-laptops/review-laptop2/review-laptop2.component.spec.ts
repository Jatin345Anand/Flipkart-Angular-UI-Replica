import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLaptop2Component } from './review-laptop2.component';

describe('ReviewLaptop2Component', () => {
  let component: ReviewLaptop2Component;
  let fixture: ComponentFixture<ReviewLaptop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLaptop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLaptop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
