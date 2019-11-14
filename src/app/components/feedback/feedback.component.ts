import { Component, OnInit } from '@angular/core';
import {UserService} from '../../servises/user.service';
import {Router} from '@angular/router';
import {Feedback} from '../../models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  userToken: any;
  isTokenPresent = {
    id: '',
    name: '',
    // comment: ''
  };
  userFeedback = [{
    name: '',
    comment: ''
  }];
  // Comment: Feedback[] = [{
  //   name: '',
  //   id: '',
  //   comment: ''
  // }];
  Comment: Feedback[] = [];
  Click() {
      this.Comment = JSON.parse(localStorage.getItem('token'));
      // const hero = this.Comment.filter((target) => {
      //   return target.comment = 'bla';
      // });
      // console.log(hero);
      console.log(this.Comment);
  }
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const getItem = localStorage.getItem('token');
    this.isTokenPresent = JSON.parse(getItem);
    console.log(this.isTokenPresent);
    this.getFeedback();
    this.userToken = localStorage.getItem('token');
    // console.log(this.Comment);
  }
  getFeedback() {
     this.userService.getFeedback().subscribe((res: any) => {
      this.userFeedback = res;
      console.log(this.userFeedback);
    });
  }
  comment(feedbackForm) {
    const localStorageData = JSON.parse(localStorage.getItem('token'));
  // console.log(feedbackForm.value);
    feedbackForm.value.id = localStorageData.id;
    feedbackForm.value.name = localStorageData.name;
  // feedbackForm.value.comment = localStorageData.name;
    console.log(feedbackForm.value);
    return this.userService.comment(feedbackForm.value).subscribe((newComment: Feedback) => {


      // this.Comment = JSON.parse(localStorage.getItem('token'));
      // this.Comment.push(newComment);
      console.log(newComment);
      // console.log(Comment);
      // this.Comment.push(newComment);
    });
}
}
