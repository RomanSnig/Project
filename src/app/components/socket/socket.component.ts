import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Order} from '../../models/order';
import {OrderProduct} from '../../models/orderProduct';
import {Accommodation} from '../../models/accommodation';
import {__await} from 'tslib';
import {OrderService} from '../../servises/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  userProduct: any;
product: any[] = [{
  name: '',
  quantity: null,
  price: null,
  comment: '',
  id: null,
  image: null,
  quantityStorage: null
}];
event = false;
totalPrice = 0;
  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.order.list);
    this.userProduct = localStorage.getItem('product');
    const getItem = localStorage.getItem('product');
    this.product = JSON.parse(getItem);
    // this.product = JSON.parse(item);
    console.log(this.product);
    // this.totalPrice = this.product.reduce((total, item) => {
    //   return total = item.quantityStorage * item.price;
    // }, 0);
    this.computePrice();
  }
  computePrice() {
    for (let i = 0; i < this.product.length; i++) {
      this.totalPrice += this.product[i].price * this.product[i].quantityStorage;
    }
  }
  socketEvent() {
    this.event = !this.event;
  }
deleteOrder(product) {
    const lsJson = JSON.parse(localStorage.getItem('product'));
  //   const filtered = lsJson.filter((elem) => {
  //   return elem.id === product.id;
  // });
  //   if (filtered.length > 0) {}
    lsJson.splice(product, 1);
    console.log(lsJson);
    if (lsJson.length > 0) {
      localStorage.setItem('product', JSON.stringify(lsJson));
    } else {localStorage.removeItem('product');
    }
    this.totalPrice = 0;
    this.ngOnInit();
    // this.product.splice(product, 1);
    // console.log(this.product);
}
sendOrder(orderForm: Accommodation[]) {
  // console.log(orderForm.value);
    const localStorageData = JSON.parse(localStorage.getItem('token'));
    const order: Order = {
    list: this.product.map(item => {
      delete item.comment;
      delete item.image;
      delete item.quantity;
      return item;
    }),
    accommodation: orderForm,
    totalPrice: this.totalPrice,
    user: localStorageData.id
  };
    console.log(order);
    return this.orderService.create(order).subscribe(newOrder => {
    console.log(order);
    localStorage.removeItem('product');
    this.router.navigate(['/']);
  });
}
}
