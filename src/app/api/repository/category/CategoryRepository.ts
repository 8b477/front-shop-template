import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Category } from '../../../models/entity/Category';
import { CategoryCreateDTO } from '../../../models/validations-dto/category/create/CategoryCreateDTO';
import { CategoryUpdateDTO } from '../../../models/validations-dto/category/update/CategoryUpdateDTO';
import { ICategoryGeteway } from '../../interface/category/ICategoryGateway';

export class CategoryRepository implements ICategoryGeteway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->
  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newCategory: CategoryCreateDTO): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  public getById(idCategory: number): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(idCategory: number, categoryNameToUpdate: CategoryUpdateDTO): Observable<Category> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idCategory: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
