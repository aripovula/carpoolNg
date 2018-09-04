import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';
import { LoggingService } from './../services/logging.service';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  token;
  constructor(private http: Http, private logService: LoggingService) { }

  saveCompanionsSelected(selectedCompanions) {
    this.logService.logStatusChange('in getCompanionsSelected2  firebase.auth() = ' + firebase.auth().currentUser);
    if (firebase.auth().currentUser != null) {
      const tokenObs = Observable.fromPromise(firebase.auth().currentUser.getIdToken());
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

  isAuthenticated() {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log('in onAuthStateChanged uder = ', user);
      if (user) {
        console.log(' LOGGED IN ');
        return true;
      } else {
        console.log(' NOT LOGGED IN ', user);
        return false;
      }
    });
  }

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
        response => console.log('Sign upçç success', response)
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
