import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomerRatingComponent } from './filter-customer-rating.component';

describe('FilterCustomerRatingComponent', () => {
  let component: FilterCustomerRatingComponent;
  let fixture: ComponentFixture<FilterCustomerRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCustomerRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCustomerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
