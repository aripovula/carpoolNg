import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FirebaseService } from './firebase.service';
import { AppState } from '../ngrx-store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;
  constructor(
    public firebaseService: FirebaseService,
    public router: Router,
    private store: Store<AppState>) {
       this.store.select('isLoggedIn').subscribe(data => this.isLoggedIn = data);
     }

  canActivate(): boolean {
    // this.count$ = store.pipe(select('count'));

    console.log('isLoggedIn from Store = ', this.isLoggedIn);

    console.log('in canActivate AuthGuard', this.isLoggedIn);
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  isAuthenticated() {
    this.store.select('isLoggedIn').subscribe(data => this.isLoggedIn = data);
    console.log('this.userLoggedIn in isAuthenticated in authService = ' + this.isLoggedIn);
    return this.isLoggedIn;
  }

}
