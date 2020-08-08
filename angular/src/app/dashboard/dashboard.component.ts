import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public name: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.name = this.userService.getName();
  }

  setName(name: string) {
    this.userService.setName(name);
  }
}
