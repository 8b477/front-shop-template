import { Observable } from 'rxjs';
import { Article } from '../../../../models/entity/Article';
import { ArticleCreateDTO } from '../../../../models/validations-dto/article/create/ArticleCreateDTO';
import { ArticleNameUpdateDTO } from '../../../../models/validations-dto/article/update/ArticleNameUpdateDTO';
import { ArticlePriceUpdateDTO } from '../../../../models/validations-dto/article/update/ArticlePriceUpdateDTO';
import { ArticlePromoUpdateDTO } from '../../../../models/validations-dto/article/update/ArticlePromoUpdateDTO';
import { ArticleStockUpdateDTO } from '../../../../models/validations-dto/article/update/ArticleStockUpdateDTO';
import { ArticleUpdateDTO } from '../../../../models/validations-dto/article/update/ArticleUpdateDTO';
import { ArticleViewDTO } from '../../../../models/views-dto/article/ArticleViewDTO';

export interface IArticleGetaway {
  //#region <-------------> CREATE <------------->
  create(newArticle: ArticleCreateDTO): Observable<Article>;
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<ArticleViewDTO[]>;
  getById(idArticle: number): Observable<ArticleViewDTO>;
  getByName(nameOfArticle: string): Observable<ArticleViewDTO>;

  //#endregion

  //#region <-------------> UPDATE <------------->
  update(idArticle: number, articleToUpdate: ArticleUpdateDTO): Observable<ArticleViewDTO>;
  updateName(idArticle: number, articleNameToUpdate: ArticleNameUpdateDTO): Observable<string>;
  updateStock(idArticle: number, articleStockToUpdate: ArticleStockUpdateDTO): Observable<string>;
  updatePromo(idArticle: number, articlePromoToUpdate: ArticlePromoUpdateDTO): Observable<string>;
  updatePrice(idArticle: number, articlePriceToUpdate: ArticlePriceUpdateDTO): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idArticle: number): Observable<boolean>;
  //#endregion
}
