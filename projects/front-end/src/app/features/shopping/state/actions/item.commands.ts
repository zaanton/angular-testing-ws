import { createAction, props } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/items.reducer';

export const loadShoppingList = createAction(
  '[shopping feature command] load shopping list'
);

export const addShoppingItem = createAction(
  '[shopping feature command] add shopping item',
  props<{ payload: string }>()
);

export const markItemPurchased = createAction(
  '[shopping feature command] item marked purchased',
  props<{ payload: ShoppingItemEntity }>()
);
