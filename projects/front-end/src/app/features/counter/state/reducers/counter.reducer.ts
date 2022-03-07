import { createReducer, on } from "@ngrx/store";
import * as events from '../actions/counter.events';
export interface CounterState {
  current: number;
  by: number;
}

// What should this be when it first starts up
const initialState:CounterState = {
  current: 0,
  by: 1
}

export const reducer = createReducer(initialState,
  on(events.countBySet, (s,a):CounterState => ({...s, by: a.payload})),
  on(events.countIncremented, (s) => ({ ...s, current: s.current + s.by})),
  on(events.countDecremented, (s) => ({...s, current: s.current - s.by})),
  on(events.countReset, (s) => ({...s, current: 0}))
  );
