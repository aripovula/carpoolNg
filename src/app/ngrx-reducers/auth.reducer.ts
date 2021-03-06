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
        userId: action.payload,
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

      case AuthActions.SET_TOKEN:
      console.log('in AuthActions.SET_TOKEN', action.payload);
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
}
