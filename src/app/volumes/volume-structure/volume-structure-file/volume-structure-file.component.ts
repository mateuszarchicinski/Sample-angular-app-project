import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from './file.model';

@Component({
  selector: 'app-volume-structure-file',
  templateUrl: './volume-structure-file.component.html',
  styleUrls: ['./volume-structure-file.component.css']
})
export class VolumeStructureFileComponent implements OnInit {
  @Input() public file: File;
  @Output() public fileSize = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.fileSize.emit(this.file.size);
  }
}
