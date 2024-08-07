import { Observable } from 'rxjs';
import { OrderSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderSentAtUpdateDTO';
import { OrderStatusAndSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderStatusAndSentAtUpdateDTO';
import { OrderViewDTO } from '../../../models/views-dto/order/OrderViewDTO';
import { OrderCreateDTO } from './../../../models/validations-dto/order/create/OrderCreateDTO';
import { OrderStatusUpdateDTO } from './../../../models/validations-dto/order/update/OrderStatusUpdateDTO';
export abstract class IOrderGateway {
  //#region <-------------> CREATE <------------->
  public abstract create(orderToCreate: OrderCreateDTO): Observable<OrderViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  public abstract getAll(): Observable<OrderViewDTO[]>;
  public abstract getById(idOrder: number): Observable<OrderViewDTO>;
  public abstract getByIdUser(iduser: number): Observable<OrderViewDTO[]>;
  public abstract getOwnerOrder(): Observable<OrderViewDTO[]>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  public abstract updateStatusOrder(orderStatusToUpdate: OrderStatusUpdateDTO): Observable<string>;
  public abstract updateSentAtOrder(orderSentAtToUpdate: OrderSentAtUpdateDTO): Observable<string>;
  public abstract updateStatusAndSentAtOrder(
    orderStatusAndSentAtToUpdate: OrderStatusAndSentAtUpdateDTO
  ): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  public abstract delete(idOrder: number): Observable<boolean>;
  //#endregion
}
