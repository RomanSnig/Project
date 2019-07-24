import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../servises/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  User: User[] = [];
  constructor(private userService: UserService) {
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
    });
}
}
