import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopTouchScreenComponent } from './filter-laptop-touch-screen.component';

describe('FilterLaptopTouchScreenComponent', () => {
  let component: FilterLaptopTouchScreenComponent;
  let fixture: ComponentFixture<FilterLaptopTouchScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopTouchScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopTouchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
