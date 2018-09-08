import { ADD_USER } from '../ngrx-actions/auth.action';
import * as AuthActions from '../ngrx-actions/auth.action';
import { Action } from '@ngrx/store';
// import { User } from '../models/user.model';


const initialState = {
    id: null,
    isLoggedIn: false
}
    ;

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.ADD_USER:
            return {
                id: action.payload.userId,
                isLoggedIn: action.payload.isLoggedIn
            };
        default:
            return state;
    }
}
