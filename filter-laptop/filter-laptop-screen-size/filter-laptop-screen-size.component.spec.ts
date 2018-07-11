import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopScreenSizeComponent } from './filter-laptop-screen-size.component';

describe('FilterLaptopScreenSizeComponent', () => {
  let component: FilterLaptopScreenSizeComponent;
  let fixture: ComponentFixture<FilterLaptopScreenSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopScreenSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopScreenSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
