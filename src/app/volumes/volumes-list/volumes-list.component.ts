import { Component, OnInit } from '@angular/core';
import { Volume } from '../volume.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.css']
})
export class VolumesListComponent implements OnInit {
  public volumes: Volume[] = [
    {
      id: 'volume-1',
      color: 'red'
    },
    {
      id: 'volume-2',
      color: 'green'
    },
    {
      id: 'volume-3',
      color: 'blue'
    }
  ];
  public currVolume: Volume;

  constructor() {}

  setCurrVolume(obj) {
    console.log(obj);
    
    this.currVolume = obj;
  }

  ngOnInit() {
  }

}
