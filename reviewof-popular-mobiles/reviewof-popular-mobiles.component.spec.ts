import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewofPopularMobilesComponent } from './reviewof-popular-mobiles.component';

describe('ReviewofPopularMobilesComponent', () => {
  let component: ReviewofPopularMobilesComponent;
  let fixture: ComponentFixture<ReviewofPopularMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewofPopularMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewofPopularMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
