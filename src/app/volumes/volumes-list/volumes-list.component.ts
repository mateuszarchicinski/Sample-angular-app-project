import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Volume } from '../volume.model';
import { AlertConfig } from '../../alert/alert-config.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.css']
})
export class VolumesListComponent implements OnInit {
  @Output() public volumeSelected = new EventEmitter<object>();
  public volumes: Volume[];
  public currVolume: Volume;
  public alertConfig: AlertConfig;

  constructor(private dataStorageService: DataStorageService) {}

  getVolumes() {
    this.dataStorageService.getVolumes(this.handleSuccess((sRes) => {
      this.volumes = sRes.json();
    }), this.handleError());
  }

  setCurrVolume(volume: Volume) {
    if (this.currVolume === volume) {
      return;
    }

    this.dataStorageService.getVolumeStructure(volume.id, this.handleSuccess((sRes) => {
      this.currVolume = volume;
      this.volumeSelected.emit(sRes.json());
    }), this.handleError());
  }

  handleSuccess(callback) {
    return (sRes) => {
      this.alertConfig = null;
      callback(sRes);
    };
  }

  handleError() {
    return (eRes) => {
      this.alertConfig = new AlertConfig(eRes.status > 403 ? 'danger' : 'warning', `Response Status Code: ${eRes.status} Response Message: ${eRes.json().error.message}`);
    };
  }

  ngOnInit() {
    this.getVolumes();
  }
}
