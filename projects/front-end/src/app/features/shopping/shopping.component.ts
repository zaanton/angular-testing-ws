import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFeatureDataLoaded } from './state';
import { shoppingStarted } from './state/actions/item.events';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  featureLoaded$!: Observable<boolean>;
  constructor(private store: Store) {
    store.dispatch(shoppingStarted());
  }

  ngOnInit(): void {
    this.featureLoaded$ = this.store.select(selectFeatureDataLoaded);
  }
}
