import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input()
  public name: string;

  @Output()
  public nameChanged = new EventEmitter<string>();

  public setName(name: string) {
    this.nameChanged.emit(name);
  }
}
