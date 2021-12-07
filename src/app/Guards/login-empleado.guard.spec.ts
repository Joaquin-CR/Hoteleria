import { TestBed } from '@angular/core/testing';

import { LoginEmpleadoGuard } from './login-empleado.guard';

describe('LoginEmpleadoGuard', () => {
  let guard: LoginEmpleadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginEmpleadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
