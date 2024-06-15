import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPromoHomeContainerComponent } from './articles-promo-container.component';

describe('ArticlesPromoHomeContainerComponent', () => {
  let component: ArticlesPromoHomeContainerComponent;
  let fixture: ComponentFixture<ArticlesPromoHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesPromoHomeContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesPromoHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
