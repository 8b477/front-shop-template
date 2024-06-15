import { Component } from '@angular/core';
import { ArticlesPromoHomeContainerComponent } from '../../components/articles-home-promo-container/articles-promo-container.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SearchComponent, ArticlesPromoHomeContainerComponent],
})
export class HomeComponent {}
