import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './ngrx-store/app.reducers';
import * as CounterActions from './ngrx-actions/counter.action';

@Component({
  selector: 'app-my-counter',
  template: `
  <br/><br/><br/><br/>
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `,
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
    console.log('count from Store = ', this.count$);
  }

  increment() {
    this.store.dispatch({ type: CounterActions.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: CounterActions.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: CounterActions.RESET });
  }
}
