import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHeaderLaptopComponent } from './review-header-laptop.component';

describe('ReviewHeaderLaptopComponent', () => {
  let component: ReviewHeaderLaptopComponent;
  let fixture: ComponentFixture<ReviewHeaderLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHeaderLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHeaderLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
