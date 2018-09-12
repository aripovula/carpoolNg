import { Action } from '@ngrx/store';
import { ADD_USER, REMOVE_USER } from '../ngrx-actions/auth.action';

export interface AuthState {
  userId: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  userId: null,
  isLoggedIn: false
};

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_USER:
      return true;

    case REMOVE_USER:
      return false;

    default:
      return state;
  }
}
