import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterScreenSizeComponent } from './filter-screen-size.component';

describe('FilterScreenSizeComponent', () => {
  let component: FilterScreenSizeComponent;
  let fixture: ComponentFixture<FilterScreenSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterScreenSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterScreenSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
