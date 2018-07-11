import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPrimaryCameraComponent } from './filter-primary-camera.component';

describe('FilterPrimaryCameraComponent', () => {
  let component: FilterPrimaryCameraComponent;
  let fixture: ComponentFixture<FilterPrimaryCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPrimaryCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPrimaryCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
