import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewofPopularLaptopsComponent } from './reviewof-popular-laptops.component';

describe('ReviewofPopularLaptopsComponent', () => {
  let component: ReviewofPopularLaptopsComponent;
  let fixture: ComponentFixture<ReviewofPopularLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewofPopularLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewofPopularLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
