import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servises/user.service';
import {LoginInterface} from '../../models/loginInterface';
import {Form, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.router.navigate(['/userPage']);
    this.authService.loginUser(loginForm).subscribe(() => {
      // localStorage.setItem('token', data.msg);
      console.log(loginForm);
    });
  }

}
