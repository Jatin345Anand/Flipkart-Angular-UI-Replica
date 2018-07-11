import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1LaptopComponent } from './item1-laptop.component';

describe('Item1LaptopComponent', () => {
  let component: Item1LaptopComponent;
  let fixture: ComponentFixture<Item1LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
