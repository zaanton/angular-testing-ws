import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ShoppingComponent } from './shopping.component';
import { featureName, reducers } from './state';
import { ItemsCommandsEffects } from './state/effects/items-commands.effects';
import { ItemMapperEffects } from './state/effects/items-mapper.effects';
import { ShoppingListOverviewComponent } from './components/shopping-list-overview/shopping-list-overview.component';
import { ShoppingListFilterComponent } from './components/shopping-list-filter/shopping-list-filter.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'entry',
        component: EntryComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ShoppingComponent,
    OverviewComponent,
    ListComponent,
    EntryComponent,
    ShoppingListOverviewComponent,
    ShoppingListFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ItemMapperEffects, ItemsCommandsEffects]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ShoppingModule {}
