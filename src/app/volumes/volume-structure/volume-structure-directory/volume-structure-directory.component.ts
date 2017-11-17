import { Component, OnChanges, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Directory } from './directory.model';

@Component({
  selector: 'app-volume-structure-directory',
  templateUrl: './volume-structure-directory.component.html',
  styleUrls: ['./volume-structure-directory.component.css']
})
export class VolumeStructureDirectoryComponent implements OnChanges {
  @Input() public directory: Directory;
  @Output() public directorySize = new EventEmitter<number>();
  public isOpened = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggle(evt: Event) {
    evt.stopPropagation();

    this.isOpened = !this.isOpened;
  }

  setDirSize(size: number) {
    this.directory.size = size;
    this.directorySize.emit(this.directory.size);
  }

  ngOnChanges() { // To prevent these issue ---> https://github.com/angular/angular/issues/17572
    this.cdr.detectChanges();
  }
}
