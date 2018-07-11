import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLaptopGraphicsProcessorNameComponent } from './filter-laptop-graphics-processor-name.component';

describe('FilterLaptopGraphicsProcessorNameComponent', () => {
  let component: FilterLaptopGraphicsProcessorNameComponent;
  let fixture: ComponentFixture<FilterLaptopGraphicsProcessorNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLaptopGraphicsProcessorNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLaptopGraphicsProcessorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
