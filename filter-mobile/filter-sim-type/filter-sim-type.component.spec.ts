import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSimTypeComponent } from './filter-sim-type.component';

describe('FilterSimTypeComponent', () => {
  let component: FilterSimTypeComponent;
  let fixture: ComponentFixture<FilterSimTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSimTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
