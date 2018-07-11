import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopDedicatedGraphicsMemoryComponent } from './filter-laptop-dedicated-graphics-memory.component';

describe('FilterLaptopDedicatedGraphicsMemoryComponent', () => {
  let component: FilterLaptopDedicatedGraphicsMemoryComponent;
  let fixture: ComponentFixture<FilterLaptopDedicatedGraphicsMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopDedicatedGraphicsMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopDedicatedGraphicsMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
