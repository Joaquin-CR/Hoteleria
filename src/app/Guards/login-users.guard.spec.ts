import { TestBed } from '@angular/core/testing';

import { LoginUsersGuard } from './login-users.guard';

describe('LoginUsersGuard', () => {
  let guard: LoginUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
