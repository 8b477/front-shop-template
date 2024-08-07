import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Article } from '../../../models/entity/Article';
import { ArticleCreateDTO } from '../../../models/validations-dto/article/create/ArticleCreateDTO';
import { ArticleNameUpdateDTO } from '../../../models/validations-dto/article/update/ArticleNameUpdateDTO';
import { ArticlePriceUpdateDTO } from '../../../models/validations-dto/article/update/ArticlePriceUpdateDTO';
import { ArticlePromoUpdateDTO } from '../../../models/validations-dto/article/update/ArticlePromoUpdateDTO';
import { ArticleStockUpdateDTO } from '../../../models/validations-dto/article/update/ArticleStockUpdateDTO';
import { ArticleUpdateDTO } from '../../../models/validations-dto/article/update/ArticleUpdateDTO';
import { ArticleViewDTO } from '../../../models/views-dto/article/ArticleViewDTO';
import { IArticleGetaway } from '../../interface/gateway/article/IArticleGetaway';

export class ArticleRepository implements IArticleGetaway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->

  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newArticle: ArticleCreateDTO): Observable<Article> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<ArticleViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  public getById(idArticle: number): Observable<ArticleViewDTO> {
    throw new Error('Method not implemented.');
  }
  public getByName(nameOfArticle: string): Observable<ArticleViewDTO> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(idArticle: number, articleToUpdate: ArticleUpdateDTO): Observable<ArticleViewDTO> {
    throw new Error('Method not implemented.');
  }
  public updateName(idArticle: number, articleNameToUpdate: ArticleNameUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public updateStock(idArticle: number, articleStockToUpdate: ArticleStockUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public updatePromo(idArticle: number, articlePromoToUpdate: ArticlePromoUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public updatePrice(idArticle: number, articlePriceToUpdate: ArticlePriceUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idArticle: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
