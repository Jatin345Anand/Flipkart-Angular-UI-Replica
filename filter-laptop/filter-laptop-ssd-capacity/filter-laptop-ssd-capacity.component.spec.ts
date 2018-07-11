import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopSsdCapacityComponent } from './filter-laptop-ssd-capacity.component';

describe('FilterLaptopSsdCapacityComponent', () => {
  let component: FilterLaptopSsdCapacityComponent;
  let fixture: ComponentFixture<FilterLaptopSsdCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopSsdCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopSsdCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
