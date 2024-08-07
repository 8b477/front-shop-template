import { Observable } from 'rxjs';
import { UserCreateDTO } from '../../../models/validations-dto/user/create/UserCreateDTO';
import { UserMailUpdateDTO } from '../../../models/validations-dto/user/update/UserMailUpdateDTO';
import { UserPseudoUpdateDTO } from '../../../models/validations-dto/user/update/UserPseudoUpdateDTO';
import { UserPwdUpdateDTO } from '../../../models/validations-dto/user/update/UserPwdUpdateDTO';
import { UserUpdateDTO } from '../../../models/validations-dto/user/update/UserUpdateDTO';
import { UserViewDTO } from '../../../models/views-dto/user/UserViewDTO';

export abstract class IUserGateway {
  //#region <-------------> CREATE <------------->
  abstract create(userToAdd: UserCreateDTO): Observable<UserViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  abstract getAll(): Observable<UserViewDTO[]>;
  abstract getProfil(): Observable<UserViewDTO>;
  abstract getById(idUser: number): Observable<UserViewDTO>;
  abstract getByPseudo(pseudoSearch: string): Observable<UserViewDTO[]>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  abstract update(idUser: number, userToUpdate: UserUpdateDTO): Observable<string>;

  abstract updatePseudo(idUser: number, userPseudoToUpdate: UserPseudoUpdateDTO): Observable<string>;
  abstract updateMail(idUser: number, userMailToUpdate: UserMailUpdateDTO): Observable<string>;
  abstract updatePwd(idUser: number, userPwdToUpdate: UserPwdUpdateDTO): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  abstract delete(idUser: number): Observable<boolean>;
  //#endregion
}
