import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopOperatingSystemComponent } from './filter-laptop-operating-system.component';

describe('FilterLaptopOperatingSystemComponent', () => {
  let component: FilterLaptopOperatingSystemComponent;
  let fixture: ComponentFixture<FilterLaptopOperatingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopOperatingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopOperatingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
