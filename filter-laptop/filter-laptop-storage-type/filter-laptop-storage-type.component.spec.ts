import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopStorageTypeComponent } from './filter-laptop-storage-type.component';

describe('FilterLaptopStorageTypeComponent', () => {
  let component: FilterLaptopStorageTypeComponent;
  let fixture: ComponentFixture<FilterLaptopStorageTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopStorageTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopStorageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
