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
  loginUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/login');
  }
  createUser(u: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user/reg', u);
  }
}
