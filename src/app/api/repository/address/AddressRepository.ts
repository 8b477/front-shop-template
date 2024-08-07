import { Address } from 'cluster';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { AddressCreateDTO } from '../../../models/validations-dto/address/create/AddressCreateDTO';
import { AddressCityUpdateDTO } from '../../../models/validations-dto/address/update/AddressCityUpdateDTO';
import { AddressCountryUpdateDTO } from '../../../models/validations-dto/address/update/AddressCountryUpdateDTO';
import { AddressPhoneNumberUpdateDTO } from '../../../models/validations-dto/address/update/AddressPhoneNumberUpdateDTO';
import { AddressViewDTO } from '../../../models/views-dto/address/AddressViewDTO';
import { IAddressGetawway } from '../../interface/gateway/address/IAddressGetaway';

export class AddressRepository implements IAddressGetawway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl;
  //#endregion

  //#region <-------------> INJECTION <------------->

  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newAddress: AddressCreateDTO): Observable<AddressViewDTO> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public getByPostalCode(postalCodeSearch: string): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public getByCity(citySearch: string): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public getByCountry(countrySearch: string): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(addressToUpdate: AddressCountryUpdateDTO): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public updateByAdmin(addressId: number, addressToUpdate: AddressCountryUpdateDTO): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public updateCity(addressCityToUpdate: AddressCityUpdateDTO): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public updateCityByAdmin(addressId: number, addressCityToUpdate: AddressCityUpdateDTO): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public updatePhoneNumber(addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  public updatePhoneNumberByAdmin(
    addressId: number,
    addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO
  ): Observable<Address> {
    throw new Error('Method not implemented.');
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idAddress: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  //#endregion
}
