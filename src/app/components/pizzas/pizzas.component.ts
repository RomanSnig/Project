import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../servises/user.service';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {OrderService} from '../../servises/order.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  lsJson = localStorage.getItem('product');
  // cart: Product[] = [{
  //   id: null,
  //   name: '',
  //   price: null,
  //   image: null,
  //   comment: '',
  //   quantity: null
  // }];
  cart: any[] = [];
  // users: Product[] = [{
  //   name: '',
  //   comment: '',
  //   // password: 'll',
  //   id: null,
  //   photo: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
  // }];
  // users = [{
  //   name: '',
  //   comment: '',
  //   id: null,
  //   image: '',
  //   // img: 'localhost//3000/uploads/',
  //   price: null
  // }];
  // photo = [{
  //    img: 'localhost//3000/uploads/' + this.users.find()
  // }];
  product: Product[] = [{
    name: '',
    comment: '',
    id: null,
    image: '',
    price: null,
    quantity: null
  }];
  // product: Observable<Product[]>;
  constructor(private http: HttpClient,
              private dataService: UserService,
              private route: ActivatedRoute,
              private order: OrderService) { }

  ngOnInit() {
    this.pizzas();
    // this.product = this.product.map((position: Product) => {
    //   position.quantity = 1;
    //   return position;
    // });
  }
      //   (product) => {
      //     return product.map(position => {
      //       position.quantity = 1;
      //       return position;
      //     });
      //   }
      // );
  pizzas() {
     this.dataService.pizzas().subscribe((res: Product[]) => {
      // this.users = res;
      this.product = res;
      console.log(this.product);
    });
  }
  Buy(product: Product) {
    // console.log('here');
    const lsJson = localStorage.getItem('product');
    console.log(lsJson);
    let arrWithProducts = [];
    const arrToLS = [];
    if (lsJson) {
      arrWithProducts = JSON.parse(lsJson);
    }
    const filtered = arrWithProducts.filter((elem) => {
        return elem.id === product.id;
      });
    if (filtered.length > 0) {
      filtered[0].quantityStorage = filtered[0].quantity + filtered[0].quantityStorage;
      const productsWithOldQuantity = arrWithProducts.filter((val) => {
        if (val.id !== product.id) {
          return true;
        } else if (val.id === product.id) {
          return false;
        }
      });
      console.log(productsWithOldQuantity);
      productsWithOldQuantity.push(filtered[0]);
      arrToLS.push(...productsWithOldQuantity);
    } else {
      product.quantityStorage = product.quantity;
      arrWithProducts.push(product);
      arrToLS.push(...arrWithProducts);
    }
    localStorage.setItem('product', JSON.stringify(arrToLS));

    // console.log(JSON.parse(localStorage.getItem('product')));
    // this.cart = JSON.parse(localStorage.getItem('product'));
    // for (const key in this.cart) {
    //   if (product.id === this.cart[key].id) {
    //     this.cart[key].quantity++;
    //     // this.cart[key].totalPrice = this.cart[key].price * this.cart[key].quantity;
    //     localStorage.setItem('product', JSON.stringify(this.cart));
    //     return false;
    //   }
    // }
    // console.log(this.cart);
    // console.log(product);
    // // product.quantity = 1;
    // // product.totalPrice = product.price * product.quantity;
    // this.cart.push(product);
    // localStorage.setItem('product', JSON.stringify(this.cart));

    // this.order.add(product);
    // console.log(this.users);
    // localStorage.setItem('product', JSON.stringify(product));
    // localStorage.setItem(JSON.stringify(product.name), JSON.stringify(product));
    /////////////////////
    // const filtered = this.cart.filter((elem) => {
    //     return elem.id === product.id;
    // });
    // if (filtered.length > 0) {
    //   filtered[0].quantityStorage = filtered[0].quantity + filtered[0].quantityStorage;
    // } else {
    //   product.quantityStorage = product.quantity;
    //   this.cart.push(product);
    // }
    // console.log(product);
    // console.log(this.cart);
    // if (filtered.length > 0) {
    //   filtered[0].quantity = filtered[0].quantity + 1;
    // }
  }
}
