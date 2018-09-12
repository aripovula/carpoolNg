import { ActionReducerMap } from '@ngrx/store';

import * as authReducers from '../ngrx-reducers/auth.reducer';
import * as counterReducers from '../ngrx-reducers/counter.reducer';

export interface AppState {
    auth: authReducers.AuthState;
    counter: counterReducers.CounterState;
  }

export const appReducers: ActionReducerMap<AppState> = {
    auth: authReducers.authReducer,
    counter: counterReducers.counterReducer
};
