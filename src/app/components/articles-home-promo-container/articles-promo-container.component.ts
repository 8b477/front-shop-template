import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles-promo-home-container',
  standalone: true,
  templateUrl: './articles-promo-container.component.html',
  imports: [ArticleComponent],
})
export class ArticlesPromoHomeContainerComponent {}
