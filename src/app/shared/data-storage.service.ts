import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';
import { Volume } from '../volumes/volume.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http) {}

  createURI(type: string, param: string) {
    let uri = `/api${param}`;

    if (!environment.production) {
      let host;

      if (type === 'volumes-list') {
        host = 'https://volumes-list.firebaseio.com';
      } else if (type === 'volume-structure') {
        host = 'https://volume-structure-41b8e.firebaseio.com';
      }

      uri = `${host}${uri}.json`;
    }

    return uri;
  }

  getVolumes(callback) {
    this.http.get(this.createURI('volumes-list', '/volumes')).subscribe((response: Response) => {
      const volumes: Volume[] = response.json();

      callback(volumes);
    });
  }

  getVolumeStructure(id: string, callback) {
    this.http.get(this.createURI('volume-structure', `/volumes/${id}`)).subscribe((response: Response) => {
      const volumeStructure: object = response.json();

      callback(volumeStructure);
    });
  }
}
