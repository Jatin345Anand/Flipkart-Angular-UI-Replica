import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopRamComponent } from './filter-laptop-ram.component';

describe('FilterLaptopRamComponent', () => {
  let component: FilterLaptopRamComponent;
  let fixture: ComponentFixture<FilterLaptopRamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopRamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
