import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {}
