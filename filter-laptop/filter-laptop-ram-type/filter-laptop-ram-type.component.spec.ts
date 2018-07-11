import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopRamTypeComponent } from './filter-laptop-ram-type.component';

describe('FilterLaptopRamTypeComponent', () => {
  let component: FilterLaptopRamTypeComponent;
  let fixture: ComponentFixture<FilterLaptopRamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopRamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopRamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
