import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../servises/user.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  users: Product = {
    name: '',
    email: '',
    // password: 'll',
    id: null,
    photo: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
  };
  constructor(private http: HttpClient,
              private dataService: UserService) { }

  ngOnInit() {
    this.pizzas(1);
  }
  pizzas(id) {
    this.dataService.pizzas(id).subscribe((res: Product) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
