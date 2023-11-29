import { Injectable } from '@angular/core';
import { ApplicationStateService } from '../stores/application-state.service';
import { TransactionAccessService } from '../access/transaction-access.service';
import { CartStateService } from '../stores/cart-state.service';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  constructor(
    private applicationState: ApplicationStateService,
    private transactionAccess: TransactionAccessService,
    private cartState: CartStateService
  ) {}

  saveTransaction(transaction:{
    customerId?: number,
    items: Array<{
      itemId: number,
      quantity: number,
    }>
  }){
    this.applicationState.setTransactionsLoading(true);
    this.transactionAccess.saveTransaction(transaction).subscribe(z=>{
      if(z.success){
        this.applicationState.setTransactionsLoading(false);
        this.cartState.updateTransaction({customerId: transaction.customerId, items:[]});
      }
    });
  }
}
