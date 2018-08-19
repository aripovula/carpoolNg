import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  itineraryForm: FormGroup;

  ngOnInit() {
    this.itineraryForm = new FormGroup({
      departure: new FormControl('home'),
      destination: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      tripDate: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  onSubmit() {
    console.log('Submitted - itinerary');
    console.log(this.itineraryForm);
  }

}
