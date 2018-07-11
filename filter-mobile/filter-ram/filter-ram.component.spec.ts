import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRamComponent } from './filter-ram.component';

describe('FilterRamComponent', () => {
  let component: FilterRamComponent;
  let fixture: ComponentFixture<FilterRamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterRamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
