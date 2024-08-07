import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { UserViewDTO } from '../../../models/views-dto/user/UserViewDTO';
import { UserGateway } from '../../interface/user/UserGateway';

export class UserRepository implements UserGateway {
  // VARIABLES
  baseUrl = environment.apiUrl;

  // INJECTION

  // GET
  getAll(): Observable<UserViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  getById(): Observable<UserViewDTO> {
    throw new Error('Method not implemented.');
  }
  getByPseudo(): Observable<UserViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  // POST
  create(): Observable<UserViewDTO> {
    throw new Error('Method not implemented.');
  }
  // PUT
  update(): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updatePseudo(): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updateMail(): Observable<string> {
    throw new Error('Method not implemented.');
  }
  updatePwd(): Observable<string> {
    throw new Error('Method not implemented.');
  }
  // DELETE
  delete(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
