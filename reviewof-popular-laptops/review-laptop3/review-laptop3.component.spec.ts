import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLaptop3Component } from './review-laptop3.component';

describe('ReviewLaptop3Component', () => {
  let component: ReviewLaptop3Component;
  let fixture: ComponentFixture<ReviewLaptop3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLaptop3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLaptop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
