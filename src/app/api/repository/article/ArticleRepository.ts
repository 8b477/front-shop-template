import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
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
import { ErrorService } from '../../service/ErrorService';

export class ArticleRepository implements IArticleGetaway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl + '/article/';
  //#endregion

  //#region <-------------> INJECTION <------------->
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);
  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newArticle: ArticleCreateDTO): Observable<Article> {
    return this.callerHttp
      .post<Article>(this.baseUrl, newArticle)
      .pipe(this.errorService.handleRequestError("Création d'un article"));
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<ArticleViewDTO[]> {
    return this.callerHttp
      .get<ArticleViewDTO>(this.baseUrl)
      .pipe(this.errorService.handleRequestError('Récupération de tout les articles'));
  }
  public getById(idArticle: number): Observable<ArticleViewDTO> {
    return this.callerHttp
      .get<ArticleViewDTO>(this.baseUrl + idArticle)
      .pipe(this.errorService.handleRequestError(`Récupération d'un article par son identifiant : {idArticle}`));
  }
  public getByName(nameOfArticle: string): Observable<ArticleViewDTO> {
    return this.callerHttp
      .get<ArticleViewDTO>(this.baseUrl + nameOfArticle)
      .pipe(this.errorService.handleRequestError(`Récupération d'un article par son nom : {nameOfArticle}`));
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(idArticle: number, articleToUpdate: ArticleUpdateDTO): Observable<ArticleViewDTO> {
    return this.callerHttp
      .put<ArticleViewDTO>(this.baseUrl + idArticle, articleToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour de l'article`));
  }
  public updateName(idArticle: number, articleNameToUpdate: ArticleNameUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + 'name/' + idArticle, articleNameToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'un nom d'article: ${articleNameToUpdate.Name}`));
  }
  public updateStock(idArticle: number, articleStockToUpdate: ArticleStockUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + 'stock/' + idArticle, articleStockToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour du stock d'un article: ${articleStockToUpdate.Stock}`));
  }
  public updatePromo(idArticle: number, articlePromoToUpdate: ArticlePromoUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + 'promo/' + idArticle, articlePromoToUpdate)
      .pipe(
        this.errorService.handleRequestError(`Mise à jour du champ 'promo' d'un article: ${articlePromoToUpdate.Promo}`)
      );
  }
  public updatePrice(idArticle: number, articlePriceToUpdate: ArticlePriceUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + '/price/' + idArticle, articlePriceToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'un nom d'article: ${articlePriceToUpdate}`));
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idArticle: number): Observable<boolean> {
    return this.callerHttp
      .delete<boolean>(this.baseUrl + idArticle)
      .pipe(this.errorService.handleRequestError(`Suppresion d'un article par son identifiant: ${idArticle}`));
  }
  //#endregion
}
