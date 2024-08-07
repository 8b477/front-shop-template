import { Observable } from 'rxjs';
import { Category } from '../../../../models/entity/Category';
import { CategoryCreateDTO } from '../../../../models/validations-dto/category/create/CategoryCreateDTO';
import { CategoryUpdateDTO } from '../../../../models/validations-dto/category/update/CategoryUpdateDTO';

export interface ICategoryGeteway {
  // <--------------------------------> TODO <-------------------------------->
  // Add get method filtered by name of one category
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> CREATE <------------->
  create(newCategory: CategoryCreateDTO): Observable<Category>;
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<Category[]>;
  getById(idCategory: number): Observable<Category>;

  //#endregion

  //#region <-------------> UPDATE <------------->
  update(idCategory: number, categoryNameToUpdate: CategoryUpdateDTO): Observable<Category>;
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idCategory: number): Observable<boolean>;
  //#endregion
}
