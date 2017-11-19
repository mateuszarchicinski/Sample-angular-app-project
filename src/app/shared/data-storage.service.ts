import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DataStorageService {
  constructor(private http: Http) {}

  private createURI(urlPath: string) {
    let uri = `/api${urlPath}`;

    if (!environment.production) {
      uri = `https://www.dev.mateusz-archicinski.pl${uri}`;
    }

    return uri;
  }

  // This solution with callbacks probably is not the best way :)
  private getResources(urlPath: string, sCallback, eCallback) {
    this.http.get(this.createURI(urlPath)).subscribe((response: Response) => {
      sCallback(response);
    }, (response: Response) => {
      eCallback(response);
    });
  }

  getVolumes(sCallback, eCallback) {
    this.getResources('/volumes', sCallback, eCallback);
  }

  getVolumeStructure(id: string, sCallback, eCallback) {
    this.getResources(`/volumes/${id}`, sCallback, eCallback);
  }
}
