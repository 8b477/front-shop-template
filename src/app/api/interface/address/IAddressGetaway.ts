import { Address } from 'cluster';
import { Observable } from 'rxjs';
import { AddressCreateDTO } from '../../../models/validations-dto/address/create/AddressCreateDTO';
import { AddressCityUpdateDTO } from '../../../models/validations-dto/address/update/AddressCityUpdateDTO';
import { AddressCountryUpdateDTO } from '../../../models/validations-dto/address/update/AddressCountryUpdateDTO';
import { AddressPhoneNumberUpdateDTO } from '../../../models/validations-dto/address/update/AddressPhoneNumberUpdateDTO';
import { AddressViewDTO } from '../../../models/views-dto/address/AddressViewDTO';

export abstract class IAddressGetawway {
  //#region <-------------> CREATE <------------->
  public abstract create(newAddress: AddressCreateDTO): Observable<AddressViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  public abstract getAll(): Observable<Address>;
  public abstract getByPostalCode(postalCodeSearch: string): Observable<Address>;
  public abstract getByCity(citySearch: string): Observable<Address>;
  public abstract getByCountry(countrySearch: string): Observable<Address>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  public abstract update(addressToUpdate: AddressCountryUpdateDTO): Observable<Address>;
  public abstract updateByAdmin(addressId: number, addressToUpdate: AddressCountryUpdateDTO): Observable<Address>;

  public abstract updateCity(addressCityToUpdate: AddressCityUpdateDTO): Observable<Address>;
  public abstract updateCityByAdmin(addressId: number, addressCityToUpdate: AddressCityUpdateDTO): Observable<Address>;

  public abstract updatePhoneNumber(addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO): Observable<Address>;
  public abstract updatePhoneNumberByAdmin(
    addressId: number,
    addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO
  ): Observable<Address>;
  //#endregion

  //#region <-------------> DELETE <------------->
  public abstract delete(idAddress: number): Observable<boolean>;
  //#endregion
}
