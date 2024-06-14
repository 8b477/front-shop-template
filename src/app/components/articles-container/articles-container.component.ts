import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-articles-container',
  standalone: true,
  templateUrl: './articles-container.component.html',
  imports: [ArticleComponent],
})
export class ArticlesContainerComponent {}
