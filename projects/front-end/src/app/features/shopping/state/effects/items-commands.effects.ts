import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import * as commands from '../actions/item.commands';
import * as documents from '../actions/item.documents';
import * as events from '../actions/item.events';
import { ShoppingItemEntity } from '../reducers/items.reducer';

@Injectable()
export class ItemsCommandsEffects {
  private readonly baseUrl = environment.apiUrl + 'shopping-list';
  // this effect is for doing the work. Making our commands into something that we can use.

  markPurchased$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(commands.markItemPurchased),
        switchMap((action) =>
          this.client
            .post(
              environment.apiUrl + 'purchased-shopping-items',
              action.payload
            )
            .pipe(
              filter(() => false),
              map(() => ({ type: 'NO_OP' })),
              catchError((response) =>
                of(
                  events.errorUpdatingItemPurchased({
                    payload: action.payload,
                    message: 'Could not update',
                  })
                )
              )
            )
        )
      );
    },
    { dispatch: true }
  );

  loadItems$ = createEffect(() => {
    // already in a stream of actions
    return this.actions$.pipe(
      ofType(commands.loadShoppingList),
      switchMap(() =>
        // this means "switch over to another stream"
        this.client.get<{ data: ShoppingItemEntity[] }>(this.baseUrl).pipe(
          map((response) => response.data),
          map((payload) => documents.shoppingItems({ payload }))
        )
      )
    );
  });

  addItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.addShoppingItem),
      switchMap((a) =>
        this.client
          .post<ShoppingItemEntity>(this.baseUrl, { description: a.payload })
          .pipe(
            map((response) => documents.shoppingItem({ payload: response }))
          )
      )
    );
  });
  constructor(private actions$: Actions, private client: HttpClient) {}
}
