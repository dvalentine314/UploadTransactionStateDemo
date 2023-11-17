import { TestBed } from '@angular/core/testing';

import { TransactionAccessService } from './transaction-access.service';

describe('TransactionAccessService', () => {
  let service: TransactionAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
