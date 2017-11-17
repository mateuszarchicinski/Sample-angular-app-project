import { Component } from '@angular/core';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent {
  public volumeStructure: object;

  constructor() {}

  onVolumeSelected(vStructure) {
    this.volumeStructure = vStructure;
  }
}
