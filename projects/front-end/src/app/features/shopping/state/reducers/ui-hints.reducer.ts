import { createReducer, on } from '@ngrx/store';
import * as itemCommands from '../actions/item.commands';
import * as itemDocuments from '../actions/item.documents';
import * as itemActions from '../actions/item.events';
import { ShoppingListSortType } from '../types';
export interface UiHintsState {
  shoppingListSortPreference: ShoppingListSortType;
  itemsLoaded: boolean;
}

const initialState: UiHintsState = {
  shoppingListSortPreference: 'all',
  itemsLoaded: false,
};

export const reducer = createReducer(
  initialState,
  on(itemDocuments.shoppingItems, (s) => ({ ...s, itemsLoaded: true })),
  on(itemCommands.loadShoppingList, (s) => ({ ...s, itemsLoaded: false })),
  on(
    itemActions.itemListFilteredBy,
    (s, a): UiHintsState => ({
      ...s,
      shoppingListSortPreference: a.payload,
    })
  )
);
