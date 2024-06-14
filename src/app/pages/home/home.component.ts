import { Component } from '@angular/core';
import { ArticlesHomeContainerComponent } from '../../components/articles-home-promo-container/articles-container.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SearchComponent, ArticlesHomeContainerComponent],
})
export class HomeComponent {}
