import { Injectable, WritableSignal, signal, computed, Signal } from '@angular/core';
import { CustomerTransaction } from '../models/customer-transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionStateService {

  private transaction: WritableSignal<CustomerTransaction> = signal({items:[]});

  transactionTotal = computed(() => {
    return this.transaction().items.reduce((total, item) => {
      return total + (item.amount * item.quantity);
    }, 0);
  });

  constructor(){
    this.initializeTestData();
  }

  /** a way to get the Transaction in a ReadOnly way*/
  getTransaction(): Signal<CustomerTransaction>{
    return this.transaction;
  }

  updateTransaction(transaction: CustomerTransaction){
    this.transaction.update(oldTransactionValue=>{
      return {...oldTransactionValue, ...transaction};
    })
  }




  /** just for demonstration. IRL this might be built through user input over multiple components */
  initializeTestData(){
    this.transaction.set({
      customerId: 1,
      items: [
        {itemId:1, description: 'Item 1', amount: 1.00, quantity: 1},
        {itemId:2, description: 'Item 2', amount: 1.50, quantity: 2},
      ]
    });
  }
}
