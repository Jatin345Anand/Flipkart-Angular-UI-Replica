import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysBabyCareComponent } from './toys-baby-care.component';

describe('ToysBabyCareComponent', () => {
  let component: ToysBabyCareComponent;
  let fixture: ComponentFixture<ToysBabyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysBabyCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysBabyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
