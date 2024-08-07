import { Observable } from 'rxjs';
import { OrderCreateDTO } from '../../../../models/validations-dto/order/create/OrderCreateDTO';
import { OrderSentAtUpdateDTO } from '../../../../models/validations-dto/order/update/OrderSentAtUpdateDTO';
import { OrderStatusAndSentAtUpdateDTO } from '../../../../models/validations-dto/order/update/OrderStatusAndSentAtUpdateDTO';
import { OrderStatusUpdateDTO } from '../../../../models/validations-dto/order/update/OrderStatusUpdateDTO';
import { OrderViewDTO } from '../../../../models/views-dto/order/OrderViewDTO';
export interface IOrderGateway {
  //#region <-------------> CREATE <------------->
  create(orderToCreate: OrderCreateDTO): Observable<OrderViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<OrderViewDTO[]>;
  getById(idOrder: number): Observable<OrderViewDTO>;
  getByIdUser(iduser: number): Observable<OrderViewDTO[]>;
  getOwnerOrder(): Observable<OrderViewDTO[]>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  updateStatusOrder(idOrder: number, orderStatusToUpdate: OrderStatusUpdateDTO): Observable<string>;
  updateSentAtOrder(idOrder: number, orderSentAtToUpdate: OrderSentAtUpdateDTO): Observable<string>;
  updateStatusAndSentAtOrder(
    idOrder: number,
    orderStatusAndSentAtToUpdate: OrderStatusAndSentAtUpdateDTO
  ): Observable<string>;
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idOrder: number): Observable<boolean>;
  //#endregion
}
