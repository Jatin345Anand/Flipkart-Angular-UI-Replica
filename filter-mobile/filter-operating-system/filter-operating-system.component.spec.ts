import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOperatingSystemComponent } from './filter-operating-system.component';

describe('FilterOperatingSystemComponent', () => {
  let component: FilterOperatingSystemComponent;
  let fixture: ComponentFixture<FilterOperatingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOperatingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOperatingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
