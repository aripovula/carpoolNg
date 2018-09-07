import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from './services/firebase.service';
import { envVars } from './../envVars.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'carpool - save money, save the planet';
  userLoggedIn = false;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    console.log('envVars.apiKey = ' + envVars.apiKey);
    console.log('envVars.authDomain = ' + envVars.authDomain);
    firebase.initializeApp({
      apiKey: envVars.apiKey,
      authDomain: envVars.authDomain
    });

    this.isAuthenticatedObserver();
    this.isAuthenticated();
  }

  isAuthenticatedObserver() {
    const that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      console.log('in onAuthStateChanged Observer, user = ', user);
      if (user) {
        this.userLoggedIn = true;
        console.log('LOGGED IN');
        that.router.navigate(['/']);
      } else {
        this.userLoggedIn = false;
        console.log('NOT LOGGED IN');
      }
      console.log('this.userLoggedIn = ' + this.userLoggedIn);
    });
  }

  isAuthenticated() {
    console.log('this.userLoggedIn in isAuthenticated in FirebaseService = ' + this.userLoggedIn);
    // return this.userLoggedIn;
    return true;
  }


  onLogout() {
    console.log('LOGOUT 2222');
    this.firebaseService.signOut();
  }

}
