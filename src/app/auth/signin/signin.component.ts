import { FirebaseService } from './../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
  <div>
    <!--<div *ngIf="isModalDisplayed"> -->
    <form (ngSubmit)="onSignUp(f)" #f="ngForm">
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <!--<span class="close" (click)="onCloseSelected()">&times;</span>-->
      <p>Login</p>
    </div>
    <div class="modal-body">
      <p>Some text in the Modal Body</p>
      <p>Some other text...</p>
      <input
        id="email"
        name="email"
        type="text"
        size="40"
        ngModel
      />
      <br/>
      <input
        id="password"
        name="password"
        type="password"
        size="40"
        ngModel
      />

      <br/><br/>
      <button
      type="submit"
      class="button button1"
      >Login</button>
      <br/><br/>
    </div>
  </div>
  </div>
<!--</div>-->
</form>
</div>
  `,
  styleUrls: ['./signin.component.css'],
})


export class SigninComponent implements OnInit {
  // isModalDisplayed = true;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log('in MODAL ' + email + ' ' + password);
    this.firebaseService.signUpAUser(email, password);
  }

  // onCloseSelected() {
  //   this.isModalDisplayed = false;
  // }
}
