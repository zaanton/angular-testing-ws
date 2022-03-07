import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/items.reducer';
import { ShoppingListSortType } from '../types';

export const shoppingStarted = createAction(
  '[shopping feature event] shopping feature started'
);

export const shoppingItemAdded = createAction(
  '[shopping feature event] shopping item added',
  props<{ payload: string }>()
);

export const itemMarkedPurchased = createAction(
  '[shopping feature event] item marked purchased',
  props<{ payload: ShoppingItemEntity }>()
);

export const errorUpdatingItemPurchased = createAction(
  '[shopping feature event] error marking shopping item purchased',
  props<{ payload: ShoppingItemEntity; message: string }>()
);

export const itemListFilteredBy = createAction(
  '[shopping feature event] item list filtered by',
  props<{ payload: ShoppingListSortType }>()
);
