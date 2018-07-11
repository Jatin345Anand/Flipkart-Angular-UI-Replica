import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer5Component } from './footer5.component';

describe('Footer5Component', () => {
  let component: Footer5Component;
  let fixture: ComponentFixture<Footer5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
