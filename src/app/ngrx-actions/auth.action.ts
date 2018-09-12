import { Action } from '@ngrx/store';
// import { User } from '../models/user.model';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_TOKEN = 'SET_TOKEN';

export class AddUser implements Action {
    readonly type = ADD_USER;
    // payload: { userId: 'abc', isLoggedIn: true };
    // payload: { isLoggedIn: true };
    constructor (public payload: string) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    // payload: { userId: null, isLoggedIn: false };
    // payload: { isLoggedIn: false };
}

export class SetUserId implements Action {
    readonly type = SET_USER_ID;
    constructor (public payload: string) {}
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor (public payload: string) {}
}

// export type AuthActions = AddUser;
export type AuthActions = AddUser | RemoveUser | SetUserId | SetToken;
