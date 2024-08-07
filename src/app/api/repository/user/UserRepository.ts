import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { UserCreateDTO } from '../../../models/validations-dto/user/create/UserCreateDTO';
import { UserMailUpdateDTO } from '../../../models/validations-dto/user/update/UserMailUpdateDTO';
import { UserPseudoUpdateDTO } from '../../../models/validations-dto/user/update/UserPseudoUpdateDTO';
import { UserPwdUpdateDTO } from '../../../models/validations-dto/user/update/UserPwdUpdateDTO';
import { UserUpdateDTO } from '../../../models/validations-dto/user/update/UserUpdateDTO';
import { UserViewDTO } from '../../../models/views-dto/user/UserViewDTO';
import { IUserGateway } from '../../interface/gateway/user/IUserGateway';
import { ErrorService } from '../../service/ErrorService';

export class UserRepository implements IUserGateway {
  // <--------------------------------> TODO <-------------------------------->
  // Implémente la gestion des erreurs de récupération de datas
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);
  //#endregion

  //#region <-------------> CREATE <------------->
  create(userToAdd: UserCreateDTO): Observable<UserViewDTO> {
    return this.callerHttp
      .post<UserViewDTO>(`${this.baseUrl}/user`, userToAdd)
      .pipe(this.errorService.handleRequestError('Récupération des utilisateurs'));
  }
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<UserViewDTO[]> {
    return this.callerHttp
      .get<UserViewDTO[]>(this.baseUrl + 'user')
      .pipe(this.errorService.handleRequestError('Récupération des utilisateurs'));
  }
  getProfil(): Observable<UserViewDTO> {
    return this.callerHttp
      .get<UserViewDTO>(this.baseUrl + '/user/profil')
      .pipe(this.errorService.handleRequestError('Récupération du profil utilisateur'));
  }
  getById(idUser: number): Observable<UserViewDTO> {
    return this.callerHttp
      .get<UserViewDTO>(this.baseUrl + '/user/profil/' + idUser)
      .pipe(this.errorService.handleRequestError('Récupération profil utilisateur'));
  }
  getByPseudo(pseudoSearch: string): Observable<UserViewDTO[]> {
    return this.callerHttp
      .get<UserViewDTO[]>(this.baseUrl + '/user/' + pseudoSearch)
      .pipe(this.errorService.handleRequestError('Récupération des utilisateurs par pseudo'));
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  update(idUser: number, userToUpdate: UserUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + '/user/' + idUser, userToUpdate)
      .pipe(this.errorService.handleRequestError("Mise à jour d'un utilisateur"));
  }
  updatePseudo(idUser: number, userPseudoToUpdate: UserPseudoUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + '/user/pseudo/' + idUser, userPseudoToUpdate)
      .pipe(this.errorService.handleRequestError("Mise à jour d'un pseudo utilisateur"));
  }
  updateMail(idUser: number, userMailToUpdate: UserMailUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + '/mail/' + idUser, userMailToUpdate)
      .pipe(this.errorService.handleRequestError("Mise à jour d'un mail utilisateur"));
  }
  updatePwd(idUser: number, userPwdToUpdate: UserPwdUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string>(this.baseUrl + '/pwd/' + idUser, userPwdToUpdate)
      .pipe(this.errorService.handleRequestError("Mise à jour du mot de passe d'un utilisateur"));
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idUser: number): Observable<boolean> {
    return this.callerHttp
      .delete<boolean>(this.baseUrl + '/' + idUser)
      .pipe(this.errorService.handleRequestError("Suppression d'un utilisateur"));
  }
  //#endregion
}
