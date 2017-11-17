import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Directory } from './directory.model';

@Component({
  selector: 'app-volume-structure-directory',
  templateUrl: './volume-structure-directory.component.html',
  styleUrls: ['./volume-structure-directory.component.css']
})
export class VolumeStructureDirectoryComponent implements OnInit, OnChanges {
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

  ngOnInit() {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
