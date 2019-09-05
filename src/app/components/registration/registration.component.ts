import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../servises/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  User: User[] = [];
  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  registerForm(
  ) {
}
  ngOnInit() {
  }
registerUser(registerForm: User) {
    return this.userService.createUser(registerForm).subscribe((newPerson) => {
       this.User.push(newPerson);
       console.log(newPerson);
       this.router.navigate(['/userPage']);
    });
}
}
