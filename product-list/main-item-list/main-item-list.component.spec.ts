import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemListComponent } from './main-item-list.component';

describe('MainItemListComponent', () => {
  let component: MainItemListComponent;
  let fixture: ComponentFixture<MainItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
