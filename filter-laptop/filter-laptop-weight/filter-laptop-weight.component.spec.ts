import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopWeightComponent } from './filter-laptop-weight.component';

describe('FilterLaptopWeightComponent', () => {
  let component: FilterLaptopWeightComponent;
  let fixture: ComponentFixture<FilterLaptopWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
