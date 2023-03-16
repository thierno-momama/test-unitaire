import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AccountingService } from './accounting.service';

describe('AccountingService', () => {
  let service: AccountingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(AccountingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
