import { Address } from 'cluster';
import { Order } from './Order';

export interface User {
  Id: number;
  Pseudo: string;
  Mail: string;
  Pwd: string;
  Role: string;
  Address: Address;
  Orders: Order[];
}
