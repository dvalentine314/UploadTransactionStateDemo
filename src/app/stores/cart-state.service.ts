import { Injectable, WritableSignal, signal, computed, Signal } from '@angular/core';
import { ShoppingCart } from '../models/customer-cart';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  private shoppingCart: WritableSignal<ShoppingCart> = signal({items:[]});

  cartTotal = computed(() => {
    return this.shoppingCart().items.reduce((total, item) => {
      return total + (item.amount * item.quantity);
    }, 0);
  });

  constructor(){
    this.initializeTestData();
  }

  /** a way to get the Transaction in a ReadOnly way*/
  getCart(): Signal<ShoppingCart>{
    return this.shoppingCart;
  }

  updateTransaction(transaction: ShoppingCart){
    this.shoppingCart.update(oldTransactionValue=>{
      return {...oldTransactionValue, ...transaction};
    })
  }




  /** just for demonstration. IRL this might be built through user input over multiple components */
  initializeTestData(){
    this.shoppingCart.set({
      customerId: 1,
      items: [
        {itemId:1, description: 'Item 1', amount: 1.00, quantity: 1},
        {itemId:2, description: 'Item 2', amount: 1.50, quantity: 2},
      ]
    });
  }
}
