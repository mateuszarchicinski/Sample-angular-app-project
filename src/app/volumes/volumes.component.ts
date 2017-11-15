import { Component, OnInit } from '@angular/core';
import { Volume } from './volume.model';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {
  public currVolume: Volume;

  constructor() { }

  ngOnInit() {
  }

}
