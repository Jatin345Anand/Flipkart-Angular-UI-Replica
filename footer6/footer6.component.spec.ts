import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer6Component } from './footer6.component';

describe('Footer6Component', () => {
  let component: Footer6Component;
  let fixture: ComponentFixture<Footer6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
