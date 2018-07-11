import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopGraphicsProcessorSeriesComponent } from './filter-laptop-graphics-processor-series.component';

describe('FilterLaptopGraphicsProcessorSeriesComponent', () => {
  let component: FilterLaptopGraphicsProcessorSeriesComponent;
  let fixture: ComponentFixture<FilterLaptopGraphicsProcessorSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopGraphicsProcessorSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopGraphicsProcessorSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
