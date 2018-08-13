import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  describemes = ['extravert', 'intravert', 'joyful', 'silent', 'a discusser', 'a criticizer', 'calm', 'impulsive',
'clean / tidy', 'a little messy', 'shy / timid', 'modest'];
  interests = ['sports', 'politics', 'economics', 'science', 'music', 'arts', 'fiction books', 'martial arts'];
  genders = ['male', 'female', 'other'];
  smokers = ['smoker', 'non-smoker'];
  anymusics = ['no music / songs', 'any music / songs', 'any selected below'];
  musicgenres = ['pop', 'smooth jazz', 'club', 'soft rock', 'religious talk', 'other talk', 'country', 'hard rock'];
  talkLevels = ['minimal talk journeys', 'moderate talk journeys', 'does not matter'];
  origins = ['Europe', 'Latin America', 'American - Minority *', 'Africa - North-most',
   'Africa - Other', 'Asia - Middle East', 'Asia - Central', 'Asia - Pacific'];
   yesNos = ['yes', 'no'];

  @ViewChild('f') profileForm: NgForm;
  constructor() { }

  ngAfterViewInit() {
    this.profileForm.form.patchValue({
      fullname: 'Full Name',
      address: 'abcd 1234'
    });
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
    this.profileForm.reset();
    this.profileForm.form.patchValue({
      fullname: 'Full Name',
      address: 'abcd 1234'
    });
  }

}
