import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBatteryCapacityComponent } from './filter-battery-capacity.component';

describe('FilterBatteryCapacityComponent', () => {
  let component: FilterBatteryCapacityComponent;
  let fixture: ComponentFixture<FilterBatteryCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBatteryCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBatteryCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
