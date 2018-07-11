import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemListLaptopComponent } from './main-item-list-laptop.component';

describe('MainItemListLaptopComponent', () => {
  let component: MainItemListLaptopComponent;
  let fixture: ComponentFixture<MainItemListLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemListLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemListLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
