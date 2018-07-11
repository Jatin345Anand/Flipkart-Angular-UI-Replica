import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLaptop4Component } from './review-laptop4.component';

describe('ReviewLaptop4Component', () => {
  let component: ReviewLaptop4Component;
  let fixture: ComponentFixture<ReviewLaptop4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLaptop4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLaptop4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
