import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../servises/user.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  users: User = {
    name: '',
    email: '',
    // password: 'll',
    id: ''
  };
  constructor(private http: HttpClient,
              private dataService: UserService) { }

  ngOnInit() {
    this.pizzas(1);
  }
  pizzas(id) {
    this.dataService.pizzas(id).subscribe((res: User) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
