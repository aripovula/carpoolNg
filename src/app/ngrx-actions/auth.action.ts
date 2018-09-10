import { Action } from '@ngrx/store';
// import { User } from '../models/user.model';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export class AddUser implements Action {
    readonly type = ADD_USER;
    // payload: { userId: 'abc', isLoggedIn: true };
    // payload: { isLoggedIn: true };
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    // payload: { userId: null, isLoggedIn: false };
    // payload: { isLoggedIn: false };
}

export type AuthActions = AddUser;
// export type AuthActions = [ AddUser, RemoveUser ];
