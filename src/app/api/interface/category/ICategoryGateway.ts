import { Observable } from 'rxjs';
import { Category } from '../../../models/entity/Category';
import { CategoryCreateDTO } from '../../../models/validations-dto/category/create/CategoryCreateDTO';
import { CategoryUpdateDTO } from '../../../models/validations-dto/category/update/CategoryUpdateDTO';

export abstract class ICategoryGeteway {
  // <--------------------------------> TODO <-------------------------------->
  // Add get method filtered by name of one category
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> CREATE <------------->
  public abstract create(newCategory: CategoryCreateDTO): Observable<Category>;
  //#endregion

  //#region //<-------------> GET <------------->
  public abstract getAll(): Observable<Category>;
  public abstract getById(idCategory: number): Observable<Category>;

  //#endregion

  //#region <-------------> UPDATE <------------->
  public abstract update(idCategory: number, categoryNameToUpdate: CategoryUpdateDTO): Observable<Category>;
  //#endregion

  //#region <-------------> DELETE <------------->
  public abstract delete(idCategory: number): Observable<boolean>;
  //#endregion
}
