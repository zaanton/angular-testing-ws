import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as commands from '../actions/item.commands';
import * as documents from '../actions/item.documents';
import * as events from '../actions/item.events';
import { ShoppingItemEntity } from '../reducers/items.reducer';

@Injectable()
export class ItemMapperEffects {
  // this is the effect that decides what an event means, in terms of a command.
  // so, when the shopping is started, it means, load the shoppingItems
  onStartLoadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.shoppingStarted),
      map(() => commands.loadShoppingList())
    );
  });

  markPurchased$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.itemMarkedPurchased),
      map(({ payload }) => commands.markItemPurchased({ payload }))
    );
  });

  markPurchasedDoc$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.itemMarkedPurchased),
      map(({ payload }) => ({ ...payload, purchased: true })),
      map((payload: ShoppingItemEntity) => documents.shoppingItem({ payload }))
    );
  });

  // "Compensating Activity"
  markPurchasedFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.errorUpdatingItemPurchased),
      map(({ payload }) => ({ ...payload, purchased: false })),
      map((payload: ShoppingItemEntity) => documents.shoppingItem({ payload }))
    );
  });

  onItemAdded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.shoppingItemAdded),
      map((a) => commands.addShoppingItem({ payload: a.payload }))
    );
  });

  constructor(private actions$: Actions) {}
}
