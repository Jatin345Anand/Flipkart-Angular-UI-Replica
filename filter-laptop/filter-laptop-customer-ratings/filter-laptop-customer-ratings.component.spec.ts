import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopCustomerRatingsComponent } from './filter-laptop-customer-ratings.component';

describe('FilterLaptopCustomerRatingsComponent', () => {
  let component: FilterLaptopCustomerRatingsComponent;
  let fixture: ComponentFixture<FilterLaptopCustomerRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopCustomerRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopCustomerRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
