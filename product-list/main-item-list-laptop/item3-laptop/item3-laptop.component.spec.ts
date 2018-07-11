import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item3LaptopComponent } from './item3-laptop.component';

describe('Item3LaptopComponent', () => {
  let component: Item3LaptopComponent;
  let fixture: ComponentFixture<Item3LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item3LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item3LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
