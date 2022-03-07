import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs';
import * as events from '../actions/counter.events';
@Injectable()
export class CounterEffects {
  // incoming action -> (do stuff with it) -> (nothing) | dispatch another action

  // counterStarted -> look it up in local storage -> (nothing | countBySet)
  // "Mapping Effect" -> Turn one action into another.
  loadCountBy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.counterStarted), // countStarted action | it stops here.
      map(() => localStorage.getItem('by')), // ('1' | '3' | '5' ) | null
      filter((val) => val !== null), // if it null (not stored, stop here)
      map((val) => parseInt(val!)), // ('1' | '3' | '5' ) = > (1 | 3 | 5)
      map((payload) => events.countBySet({ payload }))
    );
  });

  // countBySet -> write it to local storage -> nothing
  saveCountBy$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(events.countBySet), // only continue here if it is a countBySet, ignore the rest.
        tap((a) => localStorage.setItem('by', a.payload.toString()))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
