import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionForTravelLoversComponent } from './fashion-for-travel-lovers.component';

describe('FashionForTravelLoversComponent', () => {
  let component: FashionForTravelLoversComponent;
  let fixture: ComponentFixture<FashionForTravelLoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionForTravelLoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionForTravelLoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
