import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingOverviewSummaryModel } from '../../models';
import { selectShopingListOverview } from '../../state';

@Component({
  selector: 'app-shopping-list-overview',
  templateUrl: './shopping-list-overview.component.html',
  styleUrls: ['./shopping-list-overview.component.css'],
})
export class ShoppingListOverviewComponent implements OnInit {
  model$!: Observable<ShoppingOverviewSummaryModel>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = this.store.select(selectShopingListOverview);
  }
}
