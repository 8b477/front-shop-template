import { Observable } from 'rxjs';
import { Article } from '../../../models/entity/Article';
import { ArticleCreateDTO } from '../../../models/validations-dto/article/create/ArticleCreateDTO';
import { ArticleNameUpdateDTO } from '../../../models/validations-dto/article/update/ArticleNameUpdateDTO';
import { ArticlePriceUpdateDTO } from '../../../models/validations-dto/article/update/ArticlePriceUpdateDTO';
import { ArticlePromoUpdateDTO } from '../../../models/validations-dto/article/update/ArticlePromoUpdateDTO';
import { ArticleStockUpdateDTO } from '../../../models/validations-dto/article/update/ArticleStockUpdateDTO';
import { ArticleUpdateDTO } from '../../../models/validations-dto/article/update/ArticleUpdateDTO';
import { ArticleViewDTO } from '../../../models/views-dto/article/ArticleViewDTO';

export abstract class IArticleGetaway {
  //#region <-------------> CREATE <------------->
  public abstract create(newArticle: ArticleCreateDTO): Observable<Article>;
  //#endregion

  //#region //<-------------> GET <------------->
  public abstract getAll(): Observable<ArticleViewDTO[]>;
  public abstract getById(idArticle: number): Observable<ArticleViewDTO>;
  public abstract getByName(nameOfArticle: string): Observable<ArticleViewDTO>;

  //#endregion

  //#region <-------------> UPDATE <------------->
  public abstract update(idArticle: number, articleToUpdate: ArticleUpdateDTO): Observable<ArticleViewDTO>;
  public abstract updateName(idArticle: number, articleNameToUpdate: ArticleNameUpdateDTO): Observable<string>;
  public abstract updateStock(idArticle: number, articleStockToUpdate: ArticleStockUpdateDTO): Observable<string>;
  public abstract updatePromo(idArticle: number, articlePromoToUpdate: ArticlePromoUpdateDTO): Observable<string>;
  public abstract updatePrice(idArticle: number, articlePriceToUpdate: ArticlePriceUpdateDTO): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  public abstract delete(idArticle: number): Observable<boolean>;
  //#endregion
}
