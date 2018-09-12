import { Action } from '@ngrx/store';
import * as CounterActions from '../ngrx-actions/counter.action';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

export function counterReducer(state: CounterState = initialState, action: CounterActions.CounterActions) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state
        , count: state.count + 1
      };

    case CounterActions.DECREMENT:
    return {
      ...state
      , count: state.count - 1
    };


    case CounterActions.RESET:
    return {
      ...state
      , count: state.count = 0
    };


    default:
      return state;
  }
}
