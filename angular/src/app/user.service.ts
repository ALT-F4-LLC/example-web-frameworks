import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private name = new BehaviorSubject<string>('Jane');

  public getName() {
    return this.name.asObservable();
  }

  public setName(name: string) {
    this.name.next(name);
  }
}
