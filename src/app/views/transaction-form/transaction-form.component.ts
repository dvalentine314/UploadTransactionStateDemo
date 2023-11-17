import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionStateService } from '../../stores/transaction-state.service';
import { FormsModule } from '@angular/forms';
import { CustomerTransaction } from '../../models/customer-transaction';
import { TransactionManagerService } from '../../managers/transaction-manager.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  transaction = this.transactionState.getTransaction();
  transactionTotal = this.transactionState.transactionTotal;

  constructor(
        private transactionState: TransactionStateService,
        private transactionManager: TransactionManagerService,
  ) {}

  saveTransaction(transaction: CustomerTransaction) {
    this.transactionManager.saveTransaction({
      customerId: transaction.customerId,
      items: transaction.items.map((item) => {
        return { itemId: item.itemId, quantity: item.quantity };
      }),
    });
  }
}
