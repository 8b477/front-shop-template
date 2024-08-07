import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, OperatorFunction, throwError, timeout } from 'rxjs';
import { ApiError } from '../interface/api-error/ApiError';

export class ErrorService {
  private handleError(error: HttpErrorResponse, operation = 'operation'): Observable<never> {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Une erreur est survenue: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      switch (error.status) {
        case 400:
          errorMessage = `${operation} - Requête invalide: ${error.error.message}`;
          break;
        case 401:
          errorMessage = `${operation} - Requête non autorisée: ${error.error.message}`;
          break;
        case 403:
          errorMessage = `${operation} - Requête interdite: ${error.error.message}`;
          break;
        case 404:
          errorMessage = `${operation} - Ressource non trouvée: ${error.error.message}`;
          break;
        case 409:
          errorMessage = `${operation} - Conflit: ${error.error.message}`;
          break;
        case 500:
          errorMessage = `${operation} - Erreur serveur interne: ${error.error.message}`;
          break;
        default:
          errorMessage = `${operation} - Erreur inconnue: ${error.error.message}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => ({ code: error.status.toString(), message: errorMessage }) as ApiError);
  }

  public handleRequestError(operation: string): OperatorFunction<any, any> {
    return (source: Observable<any>) =>
      source.pipe(
        timeout(10000),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            return throwError(() => ({ code: 'TIMEOUT', message: 'La requête a expiré' }) as ApiError);
          }
          return this.handleError(error, operation);
        })
      );
  }
}
