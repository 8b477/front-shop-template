import { Observable } from 'rxjs';
import { UserCreateDTO } from '../../../../models/validations-dto/user/create/UserCreateDTO';
import { UserMailUpdateDTO } from '../../../../models/validations-dto/user/update/UserMailUpdateDTO';
import { UserPseudoUpdateDTO } from '../../../../models/validations-dto/user/update/UserPseudoUpdateDTO';
import { UserPwdUpdateDTO } from '../../../../models/validations-dto/user/update/UserPwdUpdateDTO';
import { UserUpdateDTO } from '../../../../models/validations-dto/user/update/UserUpdateDTO';
import { UserViewDTO } from '../../../../models/views-dto/user/UserViewDTO';

export interface IUserGateway {
  //#region <-------------> CREATE <------------->
  create(userToAdd: UserCreateDTO): Observable<UserViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<UserViewDTO[]>;
  getProfil(): Observable<UserViewDTO>;
  getById(idUser: number): Observable<UserViewDTO>;
  getByPseudo(pseudoSearch: string): Observable<UserViewDTO[]>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  update(idUser: number, userToUpdate: UserUpdateDTO): Observable<string>;

  updatePseudo(idUser: number, userPseudoToUpdate: UserPseudoUpdateDTO): Observable<string>;
  updateMail(idUser: number, userMailToUpdate: UserMailUpdateDTO): Observable<string>;
  updatePwd(idUser: number, userPwdToUpdate: UserPwdUpdateDTO): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idUser: number): Observable<boolean>;
  //#endregion
}
