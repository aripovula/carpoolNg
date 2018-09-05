import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
