import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ADD_USER, REMOVE_USER } from '../ngrx-actions/auth.action';
import { AppState } from '../ngrx-store/app.reducers';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  itineraryForm: FormGroup;
  isLoggedIn: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select('auth').subscribe(data => this.isLoggedIn = data.isLoggedIn);
  }

  ngOnInit() {
    this.itineraryForm = new FormGroup({
      departure: new FormControl('home'),
      destination: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      tripDate: new FormControl(moment(), [Validators.required, Validators.minLength(2)]),
      tripTime: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  onSubmit() {
    console.log('Submitted - itinerary');
    console.log(this.itineraryForm);
  }
}
