import { Component } from '@angular/core';
import { ArticlePromoComponent } from './article-promo/article.component';

@Component({
  selector: 'app-home-articles-container',
  standalone: true,
  templateUrl: './articles-container.component.html',
  imports: [ArticlePromoComponent],
})
export class ArticlesHomeContainerComponent {}
