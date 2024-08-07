import { AddressViewDTO } from '../address/AddressViewDTO';

export interface UserViewDTO {
  Id: number;
  Pseudo: string;
  Mail: string;
  Role: string;
  Address: AddressViewDTO;
}
