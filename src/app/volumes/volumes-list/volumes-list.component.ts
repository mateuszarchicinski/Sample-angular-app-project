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
  public alertConfigVList: Alert;
  public alertConfigVStructure: Alert;

  constructor(private dataStorageService: DataStorageService) {}

  setCurrVolume(volume: Volume) {
    if (this.currVolume === volume) {
      return;
    }

    this.dataStorageService.getVolumeStructure(volume.id, (sRes) => {
      this.alertConfigVStructure = null;
      this.currVolume = volume;
      this.volumeSelected.emit(sRes.json());
    }, (eRes) => {
      this.alertConfigVStructure = new Alert(eRes.status > 403 ? 'danger' : 'warning', `Response Status Code: ${eRes.status}, Response Message: ${eRes.json().message}`);
    });
  }

  ngOnInit() {
    this.dataStorageService.getVolumes((sRes) => {
      this.alertConfigVList = null;
      this.volumes = sRes.json();
    }, (eRes) => {
       this.alertConfigVList = new Alert(eRes.status > 403 ? 'danger' : 'warning', `Response Status Code: ${eRes.status}, Response Message: ${eRes.json().message}`);
    });
  }
}
