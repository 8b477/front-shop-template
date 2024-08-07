import { Article } from './Article';
import { Category } from './Category';

export interface ArticleCategories {
  Id: number;
  ArticleId: number;
  Article: Article;
  CategoryId: number;
  Category: Category;
}
