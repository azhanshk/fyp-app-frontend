import { TestBed } from '@angular/core/testing';

import { AuthSkipTestsService } from './auth--skip-tests.service';

describe('AuthSkipTestsService', () => {
  let service: AuthSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
