import { Action } from '@ngrx/store';
import * as AuthActions from '../ngrx-actions/auth.action';
// import { ADD_USER, REMOVE_USER } from '../ngrx-actions/auth.action';

export interface AuthState {
  userId: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  userId: null,
  token: null,
  isLoggedIn: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.ADD_USER:
      console.log('in AuthActions.ADD_USER');
      return {
        ...state,
        isLoggedIn: true
      };

    case AuthActions.REMOVE_USER:
      console.log('in AuthActions.REMOVE_USER');
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        token: null
      };

    default:
      return state;
  }
}
