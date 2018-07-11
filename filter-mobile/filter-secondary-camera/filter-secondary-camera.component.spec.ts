import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSecondaryCameraComponent } from './filter-secondary-camera.component';

describe('FilterSecondaryCameraComponent', () => {
  let component: FilterSecondaryCameraComponent;
  let fixture: ComponentFixture<FilterSecondaryCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSecondaryCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSecondaryCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
