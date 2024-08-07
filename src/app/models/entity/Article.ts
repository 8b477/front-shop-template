import { ArticleCategories } from './ArticleCategories';
import { Order } from './Order';

export interface Article {
  Name: string;
  ArticleCategories: ArticleCategories[];
  Stock: number;
  Promo: boolean;
  Price: number;
  OrderArticles: Order;
}
