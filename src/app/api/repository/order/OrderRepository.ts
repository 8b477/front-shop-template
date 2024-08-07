import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { OrderCreateDTO } from '../../../models/validations-dto/order/create/OrderCreateDTO';
import { OrderSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderSentAtUpdateDTO';
import { OrderStatusAndSentAtUpdateDTO } from '../../../models/validations-dto/order/update/OrderStatusAndSentAtUpdateDTO';
import { OrderStatusUpdateDTO } from '../../../models/validations-dto/order/update/OrderStatusUpdateDTO';
import { OrderViewDTO } from '../../../models/views-dto/order/OrderViewDTO';
import { IOrderGateway } from '../../interface/gateway/order/IOrderGateway';

export class OrderRepository implements IOrderGateway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->

  //#endregion

  //#region <-------------> CREATE <------------->
  public create(orderToCreate: OrderCreateDTO): Observable<OrderViewDTO> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<OrderViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  public getById(idOrder: number): Observable<OrderViewDTO> {
    throw new Error('Method not implemented.');
  }
  public getByIdUser(iduser: number): Observable<OrderViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  public getOwnerOrder(): Observable<OrderViewDTO[]> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public updateStatusOrder(orderStatusToUpdate: OrderStatusUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public updateSentAtOrder(orderSentAtToUpdate: OrderSentAtUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public updateStatusAndSentAtOrder(orderStatusAndSentAtToUpdate: OrderStatusAndSentAtUpdateDTO): Observable<string> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idOrder: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
