import { Observable } from 'rxjs';
import { UserViewDTO } from '../../../models/views-dto/user/UserViewDTO';

export abstract class UserGateway {
  //GET
  abstract getAll(): Observable<UserViewDTO[]>;
  abstract getById(): Observable<UserViewDTO>;
  abstract getByPseudo(): Observable<UserViewDTO[]>;

  //POST
  abstract create(): Observable<UserViewDTO>;

  //PUT
  abstract update(): Observable<string>;
  abstract updatePseudo(): Observable<string>;
  abstract updateMail(): Observable<string>;
  abstract updatePwd(): Observable<string>;

  //DELETE
  abstract delete(): Observable<boolean>;
}
