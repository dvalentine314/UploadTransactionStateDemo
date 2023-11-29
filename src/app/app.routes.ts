import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './views/transaction-form/shopping-cart.component';

export const routes: Routes = [
  { path: '**', component: ShoppingCartComponent, pathMatch: 'full' },
];
