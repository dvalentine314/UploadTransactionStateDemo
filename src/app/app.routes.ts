import { Routes } from '@angular/router';
import { TransactionFormComponent } from './views/transaction-form/transaction-form.component';

export const routes: Routes = [
  { path: '**', component: TransactionFormComponent, pathMatch: 'full' },
];
