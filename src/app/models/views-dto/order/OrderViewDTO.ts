import { ArticleViewDTO } from '../article/ArticleViewDTO';
import { UserViewDTO } from '../user/UserViewDTO';

export interface OrderViewDTO {
  Id: number;
  UserId: number;
  Status: string;
  CreateAt: Date;
  SentAt: Date;
  User: UserViewDTO;
  Articles: ArticleViewDTO[];
}
