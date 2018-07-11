import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMobile1Component } from './review-mobile1.component';

describe('ReviewMobile1Component', () => {
  let component: ReviewMobile1Component;
  let fixture: ComponentFixture<ReviewMobile1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewMobile1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMobile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
