import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopProcessorComponent } from './filter-laptop-processor.component';

describe('FilterLaptopProcessorComponent', () => {
  let component: FilterLaptopProcessorComponent;
  let fixture: ComponentFixture<FilterLaptopProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
