import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProcessorBrandComponent } from './filter-processor-brand.component';

describe('FilterProcessorBrandComponent', () => {
  let component: FilterProcessorBrandComponent;
  let fixture: ComponentFixture<FilterProcessorBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProcessorBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProcessorBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
