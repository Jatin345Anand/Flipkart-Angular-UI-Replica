import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2LaptopComponent } from './item2-laptop.component';

describe('Item2LaptopComponent', () => {
  let component: Item2LaptopComponent;
  let fixture: ComponentFixture<Item2LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
