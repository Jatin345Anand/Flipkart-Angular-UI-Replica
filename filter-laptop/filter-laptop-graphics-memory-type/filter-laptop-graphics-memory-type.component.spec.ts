import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopGraphicsMemoryTypeComponent } from './filter-laptop-graphics-memory-type.component';

describe('FilterLaptopGraphicsMemoryTypeComponent', () => {
  let component: FilterLaptopGraphicsMemoryTypeComponent;
  let fixture: ComponentFixture<FilterLaptopGraphicsMemoryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopGraphicsMemoryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopGraphicsMemoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
