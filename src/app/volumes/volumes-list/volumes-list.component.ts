import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Volume } from '../volume.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.css']
})
export class VolumesListComponent implements OnInit {
  @Output() public volumeSelected = new EventEmitter<object>();
  public volumes: Volume[];
  public currVolume: Volume;

  constructor(private dataStorageService: DataStorageService) {}

  setCurrVolume(obj) {
    if (this.currVolume === obj) {
      return;
    }

    this.dataStorageService.getVolumeStructure(obj.id, (volumeStructure) => {
      if (!volumeStructure) {
        return;
      }

      this.currVolume = obj;
      this.volumeSelected.emit(volumeStructure);
    });
  }

  ngOnInit() {
    this.dataStorageService.getVolumes((volumes) => {
      this.volumes = volumes;
    });
  }
}
