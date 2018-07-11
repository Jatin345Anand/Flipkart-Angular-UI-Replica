import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHeaderMobileComponent } from './review-header-mobile.component';

describe('ReviewHeaderMobileComponent', () => {
  let component: ReviewHeaderMobileComponent;
  let fixture: ComponentFixture<ReviewHeaderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHeaderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
