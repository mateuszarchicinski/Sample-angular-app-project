import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {
  public volumeStructure: object;

  constructor() {}

  onVolumeSelected(vStructure) {
    this.volumeStructure = vStructure;
  }

  ngOnInit() {}
}
