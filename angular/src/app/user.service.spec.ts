import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be "Jane"', (done: DoneFn) => {
    service
      .getName()
      .pipe(take(1)) // This isn't required in normal HTTP requests
      .subscribe((value) => {
        expect(value).toBe('Jane');
        done();
      });
  });
});
