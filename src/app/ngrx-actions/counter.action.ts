import { Action } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../ngrx-store/app.reducers';

// import { User } from '../models/user.model';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class Increment implements Action {
    count;
    readonly type = INCREMENT;
    constructor(
        private store: Store<AppState>,
        public payload: number
    ) {
            this.store.select('count').subscribe(data => this.count = data);
            // payload: { count: 1 };
          }
}

export class Decrement implements Action {
    readonly type = DECREMENT;
    payload: { decerementBy: 1 };
}

export class Reset implements Action {
    readonly type = RESET;
    payload: { setTo: 0 };
}

export type CounterActions = Increment | Decrement | Reset;
