import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../../components/article/article.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ArticleComponent, FormsModule],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  searchItem: string = '';

  selectOptions: string[] = [
    'Fruit',
    'Boisson non alcoolisé',
    'Boisson alcoolisé',
    'Surgeler',
    'Bio',
    'Conserve',
  ];
}
