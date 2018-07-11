import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLaptop5Component } from './review-laptop5.component';

describe('ReviewLaptop5Component', () => {
  let component: ReviewLaptop5Component;
  let fixture: ComponentFixture<ReviewLaptop5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLaptop5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLaptop5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
