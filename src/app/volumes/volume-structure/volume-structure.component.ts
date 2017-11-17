import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-volume-structure',
  templateUrl: './volume-structure.component.html',
  styleUrls: ['./volume-structure.component.css']
})
export class VolumeStructureComponent {
  @Input() public volumeStructure: object;

  constructor() {}
}
