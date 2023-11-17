import { Injectable } from '@angular/core';
import { ApplicationStateService } from '../stores/application-state.service';
import { TransactionAccessService } from '../access/transaction-access.service';
import { TransactionStateService } from '../stores/transaction-state.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionManagerService {

  constructor(
    private applicationState: ApplicationStateService,
    private transactionAccess: TransactionAccessService,
    private transactionState: TransactionStateService
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
        this.transactionState.updateTransaction({customerId: transaction.customerId, items:[]});
      }
    });
  }
}
