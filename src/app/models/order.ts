import {OrderProduct} from './orderProduct';
import {Accommodation} from './accommodation';

export interface Order {
  date?: Date;
  order?: number;
  user?: string;
  list: OrderProduct[];
  accommodation: Accommodation[];
  totalPrice: number;
  _id?: string;
}
