import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;
  constructor(public firebaseService: FirebaseService, public router: Router,
    private store: Store<AppState>) {
      //  this.isLoggedIn$ = this.store.pipe(select('isLoggedIn')).pipe(subscribe(data => this.genre = data));
       this.store.select('isLoggedIn').subscribe(data => this.isLoggedIn = data);
     }

  canActivate(): boolean {
    // this.count$ = store.pipe(select('count'));

    console.log('isLoggedIn from Store = ', this.isLoggedIn);

    // console.log('in canActivate AuthGuard', this.firebaseService.isAuthenticated());
    // if (!this.firebaseService.isAuthenticated()) {
      // this.router.navigate(['login']);
      // return false;
    // }
    return true;
  }
}
