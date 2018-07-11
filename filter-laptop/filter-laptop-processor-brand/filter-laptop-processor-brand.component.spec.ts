import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopProcessorBrandComponent } from './filter-laptop-processor-brand.component';

describe('FilterLaptopProcessorBrandComponent', () => {
  let component: FilterLaptopProcessorBrandComponent;
  let fixture: ComponentFixture<FilterLaptopProcessorBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopProcessorBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopProcessorBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
