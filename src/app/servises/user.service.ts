import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Feedback} from '../models/feedback';
import {Product} from '../models/product';

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
  changeUserName(u) {
    return this.http.post<User>('http://localhost:3000/user/changeUserName', {id: u.id, name: u.name});
  }
  changeUserPass(u) {
    return this.http.post<User>('http://localhost:3000/user/changePassword', {id: u.id, password: u.password});
  }
  makeAdmin(u) {
    return this.http.post<User>('http://localhost:3000/user/makeAdmin', {id: u.id, code: u.code});
  }
  // usersById(id) {
  //   return this.http.get<User>('http://localhost:3000/userId/' + id);
  // }
  pizzas() {
    return this.http.get('http://localhost:3000/product/pizzas');
  }
  comment(f: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>('http://localhost:3000/user/feedback',
      {name: f.name, comment: f.comment, userId: f.id});
  }
  getFeedback() {
    return this.http.get('http://localhost:3000/user/getFeedback');
  }
}
