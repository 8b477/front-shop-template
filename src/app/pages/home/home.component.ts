import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/articles-container/article/article.component';
import { ArticlesContainerComponent } from '../../components/articles-container/articles-container.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SearchComponent, ArticlesContainerComponent, ArticleComponent],
})
export class HomeComponent {}
