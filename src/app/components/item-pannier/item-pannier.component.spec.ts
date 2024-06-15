import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPannierComponent } from './item-pannier.component';

describe('ItemPannierComponent', () => {
  let component: ItemPannierComponent;
  let fixture: ComponentFixture<ItemPannierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPannierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemPannierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
