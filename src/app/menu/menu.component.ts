import { FirebaseService } from './../services/firebase.service';
import { AuthGuardService } from './../services/auth-guard.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menumain',
  template: `
  <div class="header header__content fixedElement">
            <span class="horIndent"></span>
            <h4 style="color: white">CAR</h4>
            <h4 style="color: yellow">POOL&nbsp;&nbsp;</h4>
            <a class="header__title" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">home</a>
            <a class="header__title" routerLink="/select" routerLinkActive="active-link">select</a>
            <a class="header__title" routerLink="/profile" routerLinkActive="active-link">profile</a>
            <a class="header__title" routerLink="/params" routerLinkActive="active-link">params</a>
            <a class="header__title" routerLink="/counter" routerLinkActive="active-link">counter</a>
            <!-- <div *ngIf="authGuardService.isAuthenticated()"> -->
                  <a
                  class="header__title"
                  style="cursor: pointer;"
                  (click)="onLogout()"
                  >logout</a>
                  <!-- c="firebaseService.isAuthenticated()" -->
            <!-- </div> -->
            <!-- <a class="header__title" routerLink="" routerLinkActive="active-link">idle</a>
            <a class="header__title" routerLink="" routerLinkActive="active-link">idle</a> -->
      </div>
  `,
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  title = 'carpool - save money, save the planet';
  userLoggedIn = false;

  constructor(
    private authGuardService: AuthGuardService,
    private firebaseService: FirebaseService,
    private router: Router,
  ) { }

  onLogout() {
    console.log('LOGOUT 2222');
    this.router.navigate(['/login']);
    this.firebaseService.signOut();
  }

}
