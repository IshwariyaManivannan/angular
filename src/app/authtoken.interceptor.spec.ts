import { TestBed } from '@angular/core/testing';

import { AuthtokenInterceptor } from './authtoken.interceptor';

describe('AuthtokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthtokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthtokenInterceptor = TestBed.inject(AuthtokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
