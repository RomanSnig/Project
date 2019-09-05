import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userURL = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  // loginUser(u: User): Observable<User> {
  //   return this.http.post<User>('http://localhost:3000/auth/log', u);
  // }
  loginUser(u) {
    return this.http.post('http://localhost:3000/auth/log', {email: u.email, password: u.password});
  }
  createUser(u: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user/reg', u);
  }
  usersById(id) {
    return this.http.get<User>('http://localhost:3000/userId/' + id);
  }
  pizzas(id) {
    return this.http.get<User>('http://localhost:3000/pizzas/' + id);
  }
}
