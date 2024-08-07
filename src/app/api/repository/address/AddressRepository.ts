import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Address } from 'cluster';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { AddressCreateDTO } from '../../../models/validations-dto/address/create/AddressCreateDTO';
import { AddressCityUpdateDTO } from '../../../models/validations-dto/address/update/AddressCityUpdateDTO';
import { AddressCountryUpdateDTO } from '../../../models/validations-dto/address/update/AddressCountryUpdateDTO';
import { AddressPhoneNumberUpdateDTO } from '../../../models/validations-dto/address/update/AddressPhoneNumberUpdateDTO';
import { AddressViewDTO } from '../../../models/views-dto/address/AddressViewDTO';
import { IAddressGetawway } from '../../interface/gateway/address/IAddressGetaway';
import { ErrorService } from '../../service/ErrorService';

export class AddressRepository implements IAddressGetawway {
  // <--------------------------------> TODO <-------------------------------->
  //
  // <--------------------------------> **** <-------------------------------->

  //#region <-------------> VARIABLE <------------->
  baseUrl: string = environment.apiUrl + '/address/';
  //#endregion

  //#region <-------------> INJECTION <------------->
  callerHttp: HttpClient = inject(HttpClient);
  errorService: ErrorService = inject(ErrorService);
  //#endregion

  //#region <-------------> CREATE <------------->
  public create(newAddress: AddressCreateDTO): Observable<AddressViewDTO> {
    return this.callerHttp
      .post<AddressCreateDTO>(this.baseUrl, newAddress)
      .pipe(this.errorService.handleRequestError("Création d'une adresse"));
  }
  //#endregion

  //#region //<-------------> GET <------------->
  public getAll(): Observable<Address[]> {
    return this.callerHttp
      .get<Address[]>(this.baseUrl)
      .pipe(this.errorService.handleRequestError('Récupération de toute les adresses'));
  }
  public getByPostalCode(postalCodeSearch: string): Observable<Address> {
    return this.callerHttp
      .get<Address[]>(this.baseUrl + 'postalCode/' + postalCodeSearch)
      .pipe(
        this.errorService.handleRequestError(
          `Récupération de tout les codes postaux correspondant : ${postalCodeSearch}`
        )
      );
  }
  public getByCity(citySearch: string): Observable<Address> {
    return this.callerHttp
      .get<Address>(this.baseUrl + 'city/' + citySearch)
      .pipe(this.errorService.handleRequestError(`Récupération de toute les villes correspondant : ${citySearch}`));
  }
  public getByCountry(countrySearch: string): Observable<Address> {
    return this.callerHttp
      .get<Address>(this.baseUrl + 'country/' + countrySearch)
      .pipe(this.errorService.handleRequestError(`Récupération de tout les pays correspondant : ${countrySearch}`));
  }
  //#endregion

  //#region <-------------> UPDATE <------------->
  public update(addressToUpdate: AddressCountryUpdateDTO): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl, addressToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'une adresse`));
  }
  public updateByAdmin(addressId: number, addressToUpdate: AddressCountryUpdateDTO): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl + addressId, addressToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'une adresse`));
  }
  public updateCity(addressCityToUpdate: AddressCityUpdateDTO): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl + 'city', addressCityToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'une ville`));
  }
  public updateCityByAdmin(addressId: number, addressCityToUpdate: AddressCityUpdateDTO): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl + 'city/' + addressId, addressCityToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'une ville`));
  }
  public updatePhoneNumber(addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl + 'phoneNumber/', addressPhoneNumberToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'un numéro de téléphone`));
  }
  public updatePhoneNumberByAdmin(
    addressId: number,
    addressPhoneNumberToUpdate: AddressPhoneNumberUpdateDTO
  ): Observable<Address> {
    return this.callerHttp
      .put<Address>(this.baseUrl + 'phoneNumber/' + addressId, addressPhoneNumberToUpdate)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'un numéro de téléphone`));
  }
  //#endregion

  //#region <-------------> DELETE <------------->
  public delete(idAddress: number): Observable<boolean> {
    return this.callerHttp
      .delete<boolean>(this.baseUrl + idAddress)
      .pipe(this.errorService.handleRequestError(`Mise à jour d'un numéro de téléphone`));
  }
  //#endregion
}
