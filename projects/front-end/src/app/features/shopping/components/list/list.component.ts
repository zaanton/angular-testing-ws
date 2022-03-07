import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListItem } from '../../models';
import { selectShoppingItemListModel } from '../../state';
import { itemMarkedPurchased } from '../../state/actions/item.events';
import { ShoppingItemEntity } from '../../state/reducers/items.reducer';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  shoppingList$!: Observable<ShoppingListItem[]>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.shoppingList$ = this.store.select(selectShoppingItemListModel);
  }

  markPurchased(item: ShoppingItemEntity) {
    this.store.dispatch(itemMarkedPurchased({ payload: item }));
  }
}
