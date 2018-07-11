import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosalComponent } from './carosal.component';

describe('CarosalComponent', () => {
  let component: CarosalComponent;
  let fixture: ComponentFixture<CarosalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
