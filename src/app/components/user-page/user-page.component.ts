import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../servises/user.service';
import {LoginComponent} from '../login/login.component';
import {ApiRes} from '../../models/ApiRes';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
// users: any = [{
//   id: '',
//   name: '',
//   email: '',
//   password: ''
// }];
//   user = localStorage.getItem('token');
 users: User = {
   name: '',
   email: '',
   // password: 'll',
   id: null
 };
 isTokenPresent = {
   id: '',
   name: ''
};
//  user = {
//    name: '',
//    email: ''
//  };
userId = 1;
  constructor(private http: HttpClient,
              private dataService: UserService,
              private router: Router) {
    //           private route: ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   this.userId = params['uuid'];
    // });
  }
  Exit() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // this.http.get('http://localhost:3000/userId/1').subscribe((data): any => {
    //   this.users = data;});
    const getItem = localStorage.getItem('token');
    this.isTokenPresent = JSON.parse(getItem);
    this.usersById(9);
  }
  usersById(id) {
    this.dataService.usersById(id).subscribe((res: User) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
