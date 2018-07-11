import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer3Component } from './footer3.component';

describe('Footer3Component', () => {
  let component: Footer3Component;
  let fixture: ComponentFixture<Footer3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
