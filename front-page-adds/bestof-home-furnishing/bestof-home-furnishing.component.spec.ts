import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestofHomeFurnishingComponent } from './bestof-home-furnishing.component';

describe('BestofHomeFurnishingComponent', () => {
  let component: BestofHomeFurnishingComponent;
  let fixture: ComponentFixture<BestofHomeFurnishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestofHomeFurnishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestofHomeFurnishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
