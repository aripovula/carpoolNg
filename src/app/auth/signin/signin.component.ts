import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
  <div>
    <!--<div *ngIf="isModalDisplayed"> -->
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
        type="text"
        size="40"
      />
      <br/>
      <input
        type="password"
        size="40"
      />

      <br/><br/>
      <button
      class="button button1"
      (click)="onLoginSelected()"
      >Login</button>
      <br/><br/>
    </div>
  </div>
  </div>
<!--</div>-->
</div>
  `,
  styleUrls: ['./signin.component.css'],
})


export class SigninComponent implements OnInit {
  // isModalDisplayed = true;

  constructor() { }

  ngOnInit() {
  }

  onLoginSelected() {
    console.log('in MODAL');
  }

  // onCloseSelected() {
  //   this.isModalDisplayed = false;
  // }
}
