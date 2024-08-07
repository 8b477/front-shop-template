import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { UserCreateDTO } from '../../../models/validations-dto/user/create/UserCreateDTO';
import { UserMailUpdateDTO } from '../../../models/validations-dto/user/update/UserMailUpdateDTO';
import { UserPseudoUpdateDTO } from '../../../models/validations-dto/user/update/UserPseudoUpdateDTO';
import { UserPwdUpdateDTO } from '../../../models/validations-dto/user/update/UserPwdUpdateDTO';
import { UserUpdateDTO } from '../../../models/validations-dto/user/update/UserUpdateDTO';
import { UserViewDTO } from '../../../models/views-dto/user/UserViewDTO';
import { IUserGateway } from '../../interface/user/IUserGateway';

export class UserRepository implements IUserGateway {
  // <--------------------------------> TODO <-------------------------------->
  // Implémente la gestion des erreurs de récupération de datas
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->
  //#endregion

  //#region <-------------> CREATE <------------->
  create(userToAdd: UserCreateDTO): Observable<UserViewDTO> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<UserViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  getProfil(): Observable<UserViewDTO> {
    throw new Error('Method not implemented.');
  }
  getById(idUser: number): Observable<UserViewDTO> {
    throw new Error('Method not implemented.');
  }
  getByPseudo(pseudoSearch: string): Observable<UserViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  update(idUser: number, userToUpdate: UserUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updatePseudo(idUser: number, userPseudoToUpdate: UserPseudoUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updateMail(idUser: number, userMailToUpdate: UserMailUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updatePwd(idUser: number, userPwdToUpdate: UserPwdUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idUser: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
