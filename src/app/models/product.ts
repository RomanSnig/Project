export interface Product {
  name: string;
  comment: string;
  id: number;
  image: string;
  price: number;
  quantity?: number;
  quantityStorage?: number;
}
