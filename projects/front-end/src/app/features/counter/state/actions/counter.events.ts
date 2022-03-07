import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[counter feature] count incremented event'
);

export const countDecremented = createAction(
  '[counter feature] count decremented event'
);

export const countReset = createAction('[counter feature] count reset');

export const countBySet = createAction(
  '[counter feature] count by set',
  props<{ payload: number }>()
);

export const counterStarted = createAction('[counter feature] counter started');
