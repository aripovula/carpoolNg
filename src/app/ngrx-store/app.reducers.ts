import * as authReducer from '../ngrx-reducers/auth.reducer';
import * as counterReducer from '../ngrx-reducers/counter.reducer';

export interface AppState {
    auth: authReducer.AuthState;
    counter: counterReducer.CounterState;
  }
