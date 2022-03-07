import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';

export const featureName = 'counterFeature';

export interface CounterState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<CounterState> = {
  counter: fromCounter.reducer,
};

// 1. Feature Selector

const selectFeature = createFeatureSelector<CounterState>(featureName);
// 2. Selector for branch (root property on the feature state)
const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);
// 3. Helpers (optional)

// 4. What the component needs.

// TODO: Our component needs a function that gives them the value of current
export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  (b) => b.current
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  (b) => b.by
);
export const selectResetDisabled = createSelector(
  selectCounterCurrent,
  (c) => c === 0
);

export const selectDecrementDisabled = createSelector(
  selectCountingBy,
  selectCounterCurrent,
  (by, current) => by - current >= 0
);
