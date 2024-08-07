import { Observable } from 'rxjs';
import { Token } from '../../../../models/Token/Token';
import { UserLogDto } from '../../../../models/validations-dto/user/log/UserLogDto';

export interface IAuthenticationGetaway {
  Authentication(userLogInfo: UserLogDto): Observable<Token>;
}
