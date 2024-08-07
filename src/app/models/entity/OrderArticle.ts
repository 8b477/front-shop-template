import { Article } from './Article';
import { Order } from './Order';

export interface OrderArticle {
  Id: number;
  OrderId: number;
  Order: Order;
  ArticleId: number;
  Article: Article;
}
