import { User } from './User';

export interface Address {
  Id: number;
  PhoneNumber: string | null;
  PostalCode: string;
  StreetNumber: string;
  StreetName: string;
  Country: string;
  City: string;
  UserId: number;
  User: User;
}
