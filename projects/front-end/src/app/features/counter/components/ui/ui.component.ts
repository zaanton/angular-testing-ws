import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterCurrent, selectDecrementDisabled, selectResetDisabled } from '../../state';
import * as events from '../../state/actions/counter.events';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  current$!: Observable<number>;
  resetDisabled$!: Observable<boolean>;
  decrementDisabled$!: Observable<boolean>;
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrent);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);

  }

  increment() {
    this.store.dispatch(events.countIncremented());
  }

  decrement() {
    this.store.dispatch(events.countDecremented());
  }

  reset() {
    this.store.dispatch(events.countReset());
  }

}
