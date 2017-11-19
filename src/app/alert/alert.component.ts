import { Component, Input } from '@angular/core';
import { AlertConfig } from './alert-config.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() public config: AlertConfig;

  constructor() {}
}
