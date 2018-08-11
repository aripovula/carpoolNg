import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
@ViewChild('f') profileForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onUploadFinished(file: any) {
    console.log('onUploadFinished');
    console.log(file);
  }

  onRemoved(file: any) {
    console.log('onRemoved');
    console.log(file);
  }

  onUploadStateChanged(state: boolean) {
    console.log('onUploadStateChanged');
    console.log(state);
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted');
  //   console.log(form);
  // }

  onSubmit() {
    console.log('Submitted - ViewChild');
    console.log(this.profileForm);
  }

}
