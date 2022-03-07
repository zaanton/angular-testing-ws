import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterStarted } from './state/actions/counter.events';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  constructor(store: Store) {
    store.dispatch(counterStarted());
  }
}
