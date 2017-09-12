import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcardsComponent } from './itemcards.component';

describe('ItemcardsComponent', () => {
  let component: ItemcardsComponent;
  let fixture: ComponentFixture<ItemcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
