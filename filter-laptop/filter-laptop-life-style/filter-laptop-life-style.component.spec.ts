import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopLifeStyleComponent } from './filter-laptop-life-style.component';

describe('FilterLaptopLifeStyleComponent', () => {
  let component: FilterLaptopLifeStyleComponent;
  let fixture: ComponentFixture<FilterLaptopLifeStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopLifeStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopLifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
