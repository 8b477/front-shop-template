import { Address } from 'cluster';
import { Observable } from 'rxjs';
import { AddressCreateDTO } from '../../../../models/validations-dto/address/create/AddressCreateDTO';
import { AddressCityUpdateDTO } from '../../../../models/validations-dto/address/update/AddressCityUpdateDTO';
import { AddressCountryUpdateDTO } from '../../../../models/validations-dto/address/update/AddressCountryUpdateDTO';
import { AddressPhoneNumberUpdateDTO } from '../../../../models/validations-dto/address/update/AddressPhoneNumberUpdateDTO';
import { AddressViewDTO } from '../../../../models/views-dto/address/AddressViewDTO';

export interface IAddressGetawway {
  //#region <-------------> CREATE <------------->
  create(newAddress: AddressCreateDTO): Observable<AddressViewDTO>;
  //#endregion

  //#region //<-------------> GET <------------->
  getAll(): Observable<Address>;
  getByPostalCode(postalCodeSearch: string): Observable<Address>;
  getByCity(citySearch: string): Observable<Address>;
  getByCountry(countrySearch: string): Observable<Address>;
  //#endregion

  //#region <-------------> UPDATE <------------->
  update(addressToUpdate: AddressCountryUpdateDTO): Observable<Address>;
  updateByAdmin(addressId: number, addressToUpdate: AddressCountryUpdateDTO): Observable<Address>;

  updateCity(addressCityToUpdate: AddressCityUpdateDTO): Observable<Address>;
  updateCityByAdmin(addressId: number, addressCityToUpdate: AddressCityUpdateDTO): Observable<Address>;

  updatePhoneNumber(addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO): Observable<Address>;
  updatePhoneNumberByAdmin(
    addressId: number,
    addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO
  ): Observable<Address>;
  //#endregion

  //#region <-------------> DELETE <------------->
  delete(idAddress: number): Observable<boolean>;
  //#endregion
}
