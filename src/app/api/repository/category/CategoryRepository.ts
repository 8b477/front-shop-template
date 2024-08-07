import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Category } from '../../../models/entity/Category';
import { CategoryCreateDTO } from '../../../models/validations-dto/category/create/CategoryCreateDTO';
import { CategoryUpdateDTO } from '../../../models/validations-dto/category/update/CategoryUpdateDTO';
import { ICategoryGeteway } from '../../interface/gateway/category/ICategoryGateway';
import { ErrorService } from '../../service/ErrorService';

export class CategoryRepository implements ICategoryGeteway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl + '/category/';
  //#endregion

  //#region <-------------> INJECTION <------------->
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);
  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newCategory: CategoryCreateDTO): Observable<Category> {
    return this.callerHttp
      .post<Category>(this.baseUrl, newCategory)
      .pipe(this.errorService.handleRequestError("Création d'une catégorie"));
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<Category[]> {
    return this.callerHttp
      .get<Category[]>(this.baseUrl)
      .pipe(this.errorService.handleRequestError('Récupération de toute lescatégories'));
  }
  public getById(idCategory: number): Observable<Category> {
    return this.callerHttp
      .get<Category>(this.baseUrl + idCategory)
      .pipe(
        this.errorService.handleRequestError(`Récupération d'une catégorie sur base de son identifiant : ${idCategory}`)
      );
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(idCategory: number, categoryNameToUpdate: CategoryUpdateDTO): Observable<Category> {
    return this.callerHttp
      .put<Category>(this.baseUrl + idCategory, categoryNameToUpdate)
      .pipe(
        this.errorService.handleRequestError(
          `Mise à jour du nom d'une catégorie sur base de son identifiant : ${idCategory}, ${categoryNameToUpdate.Name}`
        )
      );
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idCategory: number): Observable<boolean> {
    return this.callerHttp
      .delete(this.baseUrl + idCategory)
      .pipe(this.errorService.handleRequestError(`Suppression d'une catégorie par son identifiant : ${idCategory}`));
  }
  //#endregion
}
