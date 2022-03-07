import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./features/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./features/shopping/shopping.module').then(
        (m) => m.ShoppingModule
      ),
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
