import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as documents from '../actions/item.documents';
export interface ShoppingItemEntity {
  id: string;
  description: string;
  purchased: boolean;
}

export interface ItemState extends EntityState<ShoppingItemEntity> {}

export const adapter = createEntityAdapter<ShoppingItemEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(documents.shoppingItems, (s, a) => adapter.setAll(a.payload, s)),
  on(documents.shoppingItem, (s, a) => adapter.upsertOne(a.payload, s))
);
