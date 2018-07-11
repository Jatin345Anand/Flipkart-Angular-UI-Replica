import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopBrandComponent } from './filter-laptop-brand.component';

describe('FilterLaptopBrandComponent', () => {
  let component: FilterLaptopBrandComponent;
  let fixture: ComponentFixture<FilterLaptopBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
