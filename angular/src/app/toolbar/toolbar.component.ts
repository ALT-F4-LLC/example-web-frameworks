import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  public name: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.name = this.userService.getName();
  }
}
