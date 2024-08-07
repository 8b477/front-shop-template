import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { OrderCreateDTO } from '../../../models/validations-dto/order/create/OrderCreateDTO';
import { OrderSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderSentAtUpdateDTO';
import { OrderStatusAndSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderStatusAndSentAtUpdateDTO';
import { OrderStatusUpdateDTO } from '../../../models/validations-dto/order/update/OrderStatusUpdateDTO';
import { OrderViewDTO } from '../../../models/views-dto/order/OrderViewDTO';
import { IOrderGateway } from '../../interface/gateway/order/IOrderGateway';
import { ErrorService } from '../../service/ErrorService';

export class OrderRepository implements IOrderGateway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl + '/order/';
  //#endregion

  //#region <-------------> INJECTION <------------->
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);
  //#endregion

  //#region <-------------> CREATE <------------->
  public create(orderToCreate: OrderCreateDTO): Observable<OrderViewDTO> {
    return this.callerHttp
      .post<OrderViewDTO>(this.baseUrl, orderToCreate)
      .pipe(this.errorService.handleRequestError("Création d'une commande"));
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<OrderViewDTO[]> {
    return this.callerHttp
      .get<OrderViewDTO[]>(this.baseUrl)
      .pipe(this.errorService.handleRequestError(`Récupération de toute les commandes`));
  }
  public getById(idOrder: number): Observable<OrderViewDTO> {
    return this.callerHttp
      .get<OrderViewDTO>(this.baseUrl + idOrder)
      .pipe(this.errorService.handleRequestError(`Récupération d'une commande par son identifiant`));
  }
  public getByIdUser(iduser: number): Observable<OrderViewDTO[]> {
    return this.callerHttp
      .get<OrderViewDTO[]>(this.baseUrl + 'user/' + iduser)
      .pipe(this.errorService.handleRequestError(`Récupération d'une commande par l'identifiant d'un utilisateur`));
  }
  public getOwnerOrder(): Observable<OrderViewDTO[]> {
    return this.callerHttp
      .get<OrderViewDTO[]>(this.baseUrl + 'owner/')
      .pipe(this.errorService.handleRequestError(`Récupération de mes commandes`));
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public updateStatusOrder(idOrder: number, orderStatusToUpdate: OrderStatusUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string[]>(this.baseUrl + 'status/' + idOrder, orderStatusToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour du status d'une commande`));
  }
  public updateSentAtOrder(idOrder: number, orderSentAtToUpdate: OrderSentAtUpdateDTO): Observable<string> {
    return this.callerHttp
      .put<string[]>(this.baseUrl + 'sentAt/' + idOrder, orderSentAtToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour de la date d'envoie d'une commande`));
  }
  public updateStatusAndSentAtOrder(
    idOrder: number,
    orderStatusAndSentAtToUpdate: OrderStatusAndSentAtUpdateDTO
  ): Observable<string> {
    return this.callerHttp
      .put<string[]>(this.baseUrl + 'statusAndSentAt/' + idOrder, orderStatusAndSentAtToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour du status et de la date d'envoie d'une commande`));
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idOrder: number): Observable<boolean> {
    return this.callerHttp
      .delete<boolean[]>(this.baseUrl + idOrder)
      .pipe(this.errorService.handleRequestError(`Suppression d'une commande`));
  }
  //#endregion
}
