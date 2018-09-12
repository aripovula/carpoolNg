import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AuthGuardService } from './services/auth-guard.service';
import { FirebaseService } from './services/firebase.service';
import { envVars } from './../envVars.js';
// import { ADD_USER, REMOVE_USER, AuthActions, AddUser, SetToken, SetUserId } from './ngrx-actions/auth.action';
import { AppState } from './ngrx-store/app.reducers';
import * as authState from './ngrx-reducers/auth.reducer';
import * as AuthActions from './ngrx-actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'carpool - save money, save the planet';
  isLoggedIn = false;
  authState: Observable<authState.AuthState>;

  constructor(
    private firebaseService: FirebaseService,
    private authGuardService: AuthGuardService,
    private router: Router,
    public store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('envVars.apiKey = ' + envVars.apiKey);
    console.log('envVars.authDomain = ' + envVars.authDomain);
    firebase.initializeApp({
      apiKey: envVars.apiKey,
      authDomain: envVars.authDomain
    });

    this.isAuthenticatedObserver();
    this.authState = this.store.select('auth');
  }

  isAuthenticatedObserver() {
    const that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      console.log('in onAuthStateChanged Observer, user = ', user);
      if (user) {
        that.store.dispatch(new AuthActions.AddUser(user.uid));
        that.store.dispatch(new AuthActions.SetUserId(user.uid));
        // that.store.dispatch(new AuthActions.SetToken(''));
        // this.userLoggedIn = true;
        console.log('LOGGED IN');
        that.router.navigate(['/']);
      } else {
        that.store.dispatch({type: 'REMOVE_USER'});
        // this.userLoggedIn = false;
        console.log('NOT LOGGED IN');
      }
      that.store.select('auth').subscribe(data => {
        that.isLoggedIn = data.isLoggedIn;
        console.log('that.userLoggedIn = ' + that.isLoggedIn);
      });
    });
  }

  // isAuthenticated = () => {
  //   this.store.select('isLoggedIn').subscribe(data => this.isLoggedIn = data);
  //   console.log('this.userLoggedIn in isAuthenticated in authService = ' + this.isLoggedIn);
  //   return this.isLoggedIn;
  // }

  onLogout() {
    console.log('LOGOUT 2222');
    this.router.navigate(['/login']);
    this.firebaseService.signOut();
  }

}
