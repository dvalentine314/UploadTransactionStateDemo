import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private TransactionsLoading = signal(false);

  constructor() { }

  get transactionsLoading(): Signal<boolean>{
    return this.TransactionsLoading;
  }

  setTransactionsLoading(loading: boolean){
    this.TransactionsLoading.set(loading);
  }

}
