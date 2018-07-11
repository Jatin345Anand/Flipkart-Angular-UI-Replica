import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMobile2Component } from './review-mobile2.component';

describe('ReviewMobile2Component', () => {
  let component: ReviewMobile2Component;
  let fixture: ComponentFixture<ReviewMobile2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewMobile2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMobile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
