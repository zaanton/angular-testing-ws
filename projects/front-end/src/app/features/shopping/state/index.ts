import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as models from '../models';
import * as fromItems from './reducers/items.reducer';
import * as fromUiHints from './reducers/ui-hints.reducer';
export const featureName = 'shoppingFeature';

export interface ShoppingState {
  items: fromItems.ItemState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<ShoppingState> = {
  items: fromItems.reducer,
  uiHints: fromUiHints.reducer,
};

// 1. Create a Feature Selector
const selectFeature = createFeatureSelector<ShoppingState>(featureName);
// 2. A selector per branch

const selectItemBranch = createSelector(selectFeature, (f) => f.items);
const selectUiHintsBranch = createSelector(selectFeature, (f) => f.uiHints);
// 3. Helpers (optional)
const {
  selectAll: selectItemEntityArray,
  selectTotal: selectTotalNumberOfItemsOnList,
} = fromItems.adapter.getSelectors(selectItemBranch);

const selectPurchasedItems = createSelector(selectItemEntityArray, (items) =>
  items.filter((i) => i.purchased === true)
);

const selectUnpurchasedItems = createSelector(selectItemEntityArray, (items) =>
  items.filter((i) => i.purchased === false)
);

const selectItemsLoaded = createSelector(
  selectUiHintsBranch,
  (b) => b.itemsLoaded
);
// 4. What your components need

// TODO:

export const selectFeatureDataLoaded = createSelector(
  selectItemsLoaded,
  (items) => items
);

export const selectItemSortingBy = createSelector(
  selectUiHintsBranch,
  (b) => b.shoppingListSortPreference
);

export const selectShoppingItemListModel = createSelector(
  selectItemEntityArray,
  selectUnpurchasedItems,
  selectPurchasedItems,
  selectItemSortingBy,
  (allItems, unpurchasedItems, purchasedItems, filter) => {
    switch (filter) {
      case 'all': {
        return allItems as models.ShoppingListItem[];
      }
      case 'unpurchased': {
        return unpurchasedItems as models.ShoppingListItem[];
      }
      case 'purchased': {
        return purchasedItems as models.ShoppingListItem[];
      }
    }
  }
);

export const selectShopingListOverview = createSelector(
  selectTotalNumberOfItemsOnList,
  selectPurchasedItems,
  selectUnpurchasedItems,
  (total, purchased, unpurchased) => {
    return {
      totalItems: total,
      purchasedItems: purchased.length,
      unpurchasedItems: unpurchased.length,
    } as models.ShoppingOverviewSummaryModel;
  }
);
