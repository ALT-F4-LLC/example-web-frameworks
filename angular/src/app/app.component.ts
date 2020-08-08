import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public name: Observable<string>;
  public title = 'Symphony';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.name = this.userService.getName();
  }

  setName(event: string) {
    this.userService.setName(event);
  }
}
