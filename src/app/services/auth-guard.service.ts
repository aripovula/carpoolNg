import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public firebaseService: FirebaseService, public router: Router ) { }

  canActivate(): boolean {
    // console.log('in canActivate AuthGuard', this.firebaseService.isAuthenticated());
    // if (!this.firebaseService.isAuthenticated()) {
      // this.router.navigate(['login']);
      // return false;
    // }
    return true;
  }
}
