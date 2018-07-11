import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClockSpeedComponent } from './filter-clock-speed.component';

describe('FilterClockSpeedComponent', () => {
  let component: FilterClockSpeedComponent;
  let fixture: ComponentFixture<FilterClockSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterClockSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClockSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
