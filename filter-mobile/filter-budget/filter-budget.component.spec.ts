import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBudgetComponent } from './filter-budget.component';

describe('FilterBudgetComponent', () => {
  let component: FilterBudgetComponent;
  let fixture: ComponentFixture<FilterBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
