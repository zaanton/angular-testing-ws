import { createAction, props } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/items.reducer';

export const shoppingItems = createAction(
  '[shopping feature document] shopping items',
  props<{ payload: ShoppingItemEntity[] }>()
);

export const shoppingItem = createAction(
  '[shopping feature document] shopping item',
  props<{ payload: ShoppingItemEntity }>()
);
