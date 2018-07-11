import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopTypeComponent } from './filter-laptop-type.component';

describe('FilterLaptopTypeComponent', () => {
  let component: FilterLaptopTypeComponent;
  let fixture: ComponentFixture<FilterLaptopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
