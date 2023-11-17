/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionAccessService {

  constructor() { }

  saveTransaction(transaction:{
    customerId?: number,
    items: Array<{
      itemId: number,
      quantity: number,
    }>
  }){
    const fakeServiceCall = new AsyncSubject<{success: boolean}>();
    setTimeout(()=>{
      fakeServiceCall.next({success: true});
      fakeServiceCall.complete();
    }, 1000);



    return fakeServiceCall;


  }
}
