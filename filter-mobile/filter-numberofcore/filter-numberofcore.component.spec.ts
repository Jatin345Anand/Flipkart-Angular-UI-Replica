import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNumberofcoreComponent } from './filter-numberofcore.component';

describe('FilterNumberofcoreComponent', () => {
  let component: FilterNumberofcoreComponent;
  let fixture: ComponentFixture<FilterNumberofcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNumberofcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNumberofcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
