import { OrderArticle } from './OrderArticle';
import { User } from './User';

export interface Order {
  Id: number;
  UserId: number;
  Status: string;
  CreateAt: Date;
  SentAt: Date | null;
  OrderArticles: OrderArticle;
  User: User;
}
