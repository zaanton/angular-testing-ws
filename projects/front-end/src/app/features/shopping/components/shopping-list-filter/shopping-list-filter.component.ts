import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemSortingBy } from '../../state';
import * as events from '../../state/actions/item.events';
import { ShoppingListSortType } from '../../state/types';
@Component({
  selector: 'app-shopping-list-filter',
  templateUrl: './shopping-list-filter.component.html',
  styleUrls: ['./shopping-list-filter.component.css'],
})
export class ShoppingListFilterComponent implements OnInit {
  sortingBy$!: Observable<ShoppingListSortType>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sortingBy$ = this.store.select(selectItemSortingBy);
  }

  setSortBy(payload: ShoppingListSortType) {
    this.store.dispatch(events.itemListFilteredBy({ payload }));
  }
}
