import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Directory } from '../volume-structure-directory/directory.model';
import { File } from '../volume-structure-file/file.model';

@Component({
  selector: 'app-volume-structure-branch',
  templateUrl: './volume-structure-branch.component.html',
  styleUrls: ['./volume-structure-branch.component.css']
})
export class VolumeStructureBranchComponent implements OnChanges {
  @Input() public structure: object;
  @Output() public branchSize = new EventEmitter<number>();
  public directories: Directory[] = [];
  public files: File[] = [];
  public currBranchSize = 0;

  constructor() {}

  upBranchSize(size: number) {
    this.currBranchSize += size;
    this.branchSize.emit(this.currBranchSize);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.structure) {
      return;
    }

    this.directories.length = 0;
    this.files.length = 0;

    Object.keys(this.structure).forEach((name) => {
      const value = this.structure[name];

      if (typeof value === 'object') {
        this.directories.push({
          name: name,
          size: 0,
          structure: value
        });
      }

      if (typeof value === 'number') {
        this.files.push({
          name: name,
          size: value
        });
      }
    });
  }
}
