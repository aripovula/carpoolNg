import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { envVars } from './../envVars.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'carpool - save money, save the planet';

  ngOnInit() {
    console.log('envVars.apiKey = ' + envVars.apiKey);
    console.log('envVars.authDomain = ' + envVars.authDomain);
    firebase.initializeApp({
      apiKey: envVars.apiKey,
      authDomain: envVars.authDomain
    });
  }
}
