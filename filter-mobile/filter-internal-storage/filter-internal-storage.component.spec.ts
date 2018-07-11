import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInternalStorageComponent } from './filter-internal-storage.component';

describe('FilterInternalStorageComponent', () => {
  let component: FilterInternalStorageComponent;
  let fixture: ComponentFixture<FilterInternalStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInternalStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInternalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
