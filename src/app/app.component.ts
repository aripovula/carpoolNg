import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase.service';
import { envVars } from './../envVars.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'carpool - save money, save the planet';

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    console.log('envVars.apiKey = ' + envVars.apiKey);
    console.log('envVars.authDomain = ' + envVars.authDomain);
    firebase.initializeApp({
      apiKey: envVars.apiKey,
      authDomain: envVars.authDomain
    });

    this.firebaseService.isAuthenticatedObserver();
    this.firebaseService.isAuthenticated();
  }

  onLogout() {
    console.log('LOGOUT 2222');
    this.firebaseService.signOut();
  }

}
