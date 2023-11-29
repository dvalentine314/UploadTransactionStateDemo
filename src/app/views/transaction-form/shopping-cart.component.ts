import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStateService } from '../../stores/cart-state.service';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from '../../models/customer-cart';
import { CartManagerService } from '../../managers/cart-manager.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  cart = this.cartState.getCart();
  cartTotal = this.cartState.cartTotal;

  constructor(
        private cartState: CartStateService,
        private cartManager: CartManagerService,
  ) {}

  saveTransaction(shoppingCart: ShoppingCart) {
    this.cartManager.saveTransaction({
      customerId: shoppingCart.customerId,
      items: shoppingCart.items.map((item) => {
        return { itemId: item.itemId, quantity: item.quantity };
      }),
    });
  }
}
