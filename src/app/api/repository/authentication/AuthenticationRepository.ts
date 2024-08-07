import { Observable } from 'rxjs';
import { Token } from '../../../models/Token/Token';
import { UserLogDto } from '../../../models/validations-dto/user/log/UserLogDto';
import { IAuthenticationGetaway } from '../../interface/authentication/IAuthenticationGetaway';

export class AuthenticationRepository implements IAuthenticationGetaway {
  public Authentication(userLogInfo: UserLogDto): Observable<Token> {
    throw new Error('Method not implemented.');
  }
}
