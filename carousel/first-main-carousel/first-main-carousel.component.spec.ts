import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainCarouselComponent } from './first-main-carousel.component';

describe('FirstMainCarouselComponent', () => {
  let component: FirstMainCarouselComponent;
  let fixture: ComponentFixture<FirstMainCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMainCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
