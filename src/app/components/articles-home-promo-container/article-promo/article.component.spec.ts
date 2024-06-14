import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePromoComponent } from './article.component';

describe('ArticlePromoComponent', () => {
  let component: ArticlePromoComponent;
  let fixture: ComponentFixture<ArticlePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
