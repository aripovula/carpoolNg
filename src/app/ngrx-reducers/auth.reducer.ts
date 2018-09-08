import { ADD_USER } from '../ngrx-actions/auth.action';
import { Action } from '@ngrx/store';
// import { User } from '../models/user.model';


const initialState = { id: null,
    isLoggedIn: false }
;

export function authReducer(state = initialState, action: Action) {
switch (action.type) {
    case ADD_USER:
    return {
        ...state,
        user.id: action
    };
}
    return state;
}
