import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

const initialState = false;

export function authReducer(state: boolean = initialState, action: Action) {
  switch (action.type) {
    case ADD_USER:
      return true;

    case REMOVE_USER:
      return false;

    default:
      return state;
  }
}
