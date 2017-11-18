import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Volume } from '../volume.model';
import { Alert } from '../../alert/alert.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.css']
})
export class VolumesListComponent implements OnInit {
  @Output() public volumeSelected = new EventEmitter<object>();
  public volumes: Volume[];
  public currVolume: Volume;
  public alertVList: Alert;
  public alertVStructure: Alert;

  constructor(private dataStorageService: DataStorageService) {}

  getVolumes() {
    this.dataStorageService.getVolumes((sRes) => {
      this.alertVList = null;
      this.volumes = sRes.json();
    }, this.handleError('alertVList'));
  }

  setCurrVolume(volume: Volume) {
    if (this.currVolume === volume) {
      return;
    }

    this.dataStorageService.getVolumeStructure(volume.id, (sRes) => {
      this.alertVStructure = null;
      this.currVolume = volume;
      this.volumeSelected.emit(sRes.json());
    }, this.handleError('alertVStructure'));
  }

  handleError(type: string) {
    return (eRes) => {
      const err = eRes.json().error;

      this[type] = new Alert(eRes.status > 403 ? 'danger' : 'warning', `Response Status Code: ${eRes.status} Response Message: ${err.message}`);
    };
  }

  ngOnInit() {
    this.getVolumes();
  }
}
