import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-volume-structure',
  templateUrl: './volume-structure.component.html',
  styleUrls: ['./volume-structure.component.css']
})
export class VolumeStructureComponent implements OnInit {
  @Input() public volumeStructure: object;

  constructor() {}

  ngOnInit() {}
}
