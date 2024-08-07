import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Token } from '../../../models/Token/Token';
import { UserLogDto } from '../../../models/validations-dto/user/log/UserLogDto';
import { IAuthenticationGetaway } from '../../interface/gateway/authentication/IAuthenticationGetaway';
import { ErrorService } from '../../service/ErrorService';

export class AuthenticationRepository implements IAuthenticationGetaway {
  baseUrl: string = environment.apiUrl + '/log';
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);

  public Authentication(userLogInfo: UserLogDto): Observable<Token> {
    return this.callerHttp
      .post<Token>(this.baseUrl, userLogInfo)
      .pipe(this.errorService.handleRequestError("Récupération d'un token d'authentification"));
  }
}
