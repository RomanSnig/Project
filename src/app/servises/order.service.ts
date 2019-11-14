import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class OrderService {

  constructor(private http: HttpClient) { }
  create(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:3000/order/createOrder', order);
  }
}
