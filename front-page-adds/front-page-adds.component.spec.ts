import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageAddsComponent } from './front-page-adds.component';

describe('FrontPageAddsComponent', () => {
  let component: FrontPageAddsComponent;
  let fixture: ComponentFixture<FrontPageAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
