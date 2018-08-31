import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

import { DataService } from './data.service';
import { LoggingService } from './../services/logging.service';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private http: Http, private logService: LoggingService) { }

  saveCompanionsSelected(selectedCompanions) {
    this.logService.logStatusChange('in saveCompanionsSelected');
    return this.http.put('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json', selectedCompanions);
  }

  getCompanionsSelected() {
    this.logService.logStatusChange('in getCompanionsSelected');
    return this.http.get('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json');
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

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

}
