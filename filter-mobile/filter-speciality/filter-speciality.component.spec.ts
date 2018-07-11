import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSpecialityComponent } from './filter-speciality.component';

describe('FilterSpecialityComponent', () => {
  let component: FilterSpecialityComponent;
  let fixture: ComponentFixture<FilterSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
