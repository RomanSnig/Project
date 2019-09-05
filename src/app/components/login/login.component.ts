import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {LoginInterface} from '../../models/loginInterface';
import {Form, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Token} from '../../models/token';
import {ApiRes} from '../../models/ApiRes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // users: User = {
  //   name: '',
  //   email: '',
  //   // password: 'll',
  //   id: 1,
  // };

  // loginForm: FormGroup;

  constructor(
    private authService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  authUser(loginForm) {
    // return this.authService.loginUser(loginForm).subscribe(() => {
    //   console.log(loginForm);
    // });
    this.authService.loginUser(loginForm).subscribe((data: ApiRes) => {
      // localStorage.setItem('token', 'res');
      console.log(data.success);
      console.log(data.msg);
      console.log(data.user);
      // if (data.success === true) {
      localStorage.setItem('token', JSON.stringify(data.user));
      // localStorage.setItem('token', JSON.stringify(data.msg));
      // }
      // localStorage.setItem('token', data.msg);
      console.log(localStorage);
      console.log(loginForm);
      console.log(data);
      this.router.navigate(['/userPage']);
    });
  }
}
