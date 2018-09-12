import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { DataService } from './data.service';
import { LoggingService } from './../services/logging.service';
import { AppState } from '../ngrx-store/app.reducers';
import * as authState from '../ngrx-reducers/auth.reducer';
import * as AuthActions from '../ngrx-actions/auth.action';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  token;
  userLoggedIn = false;
  that = this;

  constructor(
    private http: Http,
    private logService: LoggingService,
    private router: Router,
    public store: Store<AppState>
  ) {
    console.log('in Const FB srv');
  }

  saveCompanionsSelected(selectedCompanions) {
    this.logService.logStatusChange('in getCompanionsSelected2  firebase.auth() = ' + firebase.auth().currentUser);
    if (firebase.auth().currentUser != null) {
      const tokenObs = Observable.fromPromise(firebase.auth().currentUser.getIdToken());
      this.token = tokenObs.pipe(mergeMap(token => this.token = token));
      this.store.dispatch(new AuthActions.SetToken(this.token));

      return tokenObs
        .pipe(mergeMap(token => this.http.put('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json?auth=' + token
          , selectedCompanions)))
        .pipe(map(resp => resp.json()));
    }

    // return Observable
    //   .fromPromise(firebase.auth().currentUser.getIdToken())
    //   .pipe(
    //     mergeMap(token =>
    //       this.http.put('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json?auth=' + token, selectedCompanions)
    //     ));

    // // let tokenM = '';
    // .then(
    //     (token: string) => {
    //         // tokenM = token;
    //     }
    // );

    // this.logService.logStatusChange('in saveCompanionsSelected');
    // return this.http.put('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json', selectedCompanions);
  }

  getCompanionsSelected() {
    this.logService.logStatusChange('in getCompanionsSelected2  firebase.auth() = ' + firebase.auth().currentUser);
    console.log('token = ', this.token);
    this.token = this.getToken();
    if (firebase.auth().currentUser != null) {
      const tokenObs = Observable.fromPromise(firebase.auth().currentUser.getIdToken());

      return tokenObs
        .pipe(mergeMap(token => this.http.get('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json?auth=' + token)))
        .pipe(map(resp => resp.json()));
    }
  }

  // isAuthenticatedObserver() {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     console.log('in onAuthStateChanged Observer, user = ', user);
  //     if (user) {
  //       this.userLoggedIn = true;
  //       console.log('LOGGED IN');
  //       this.that.router.navigate(['/']);
  //     } else {
  //       this.userLoggedIn = false;
  //       console.log('NOT LOGGED IN');
  //     }
  //     console.log('this.userLoggedIn = ' + this.userLoggedIn);
  //   });
  // }

  // isAuthenticated() {
  //   console.log('this.userLoggedIn in isAuthenticated in FirebaseService = ' + this.userLoggedIn);
  //   // return this.userLoggedIn;
  //   return true;
  // }

  // authState = () => {
  //   return firebase.auth().onAuthStateChanged(function (user) {
  //     console.log('in onAuthStateChanged, user = ', user);
  //     if (user) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }

  checkLoginStatus() {
    const currentUser = firebase.auth().currentUser;
    console.log('firebase.auth().currentUser = ', currentUser);
    return currentUser;
  }

  logInAUser() {

  }

  signUpAUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log('Sign up success', response)
      )
      .catch(
        error => {
          console.log('error, sending to signIn', error);
          this.signInAUser(email, password);
        }
      );
  }

  signInAUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log('Log in success', response)
      )
      .catch(
        error => console.log(error)
      );
  }

  signOut() {
    firebase.auth().signOut();
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

}
