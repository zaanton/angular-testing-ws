import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PrefsComponent } from './components/prefs/prefs.component';
import { UiComponent } from './components/ui/ui.component';
import { CounterComponent } from './counter.component';
import { featureName, reducers } from './state';
import { CounterEffects } from './state/effects/counter.effects';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'ui', // counter/ui
        component: UiComponent,
      },
      {
        path: 'prefs', // counter/prefs
        component: PrefsComponent,
      },
      {
        path: '**',
        redirectTo: 'ui',
      },
    ],
  },
];

@NgModule({
  declarations: [CounterComponent, PrefsComponent, UiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
