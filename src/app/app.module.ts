import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';

import { DataStorageService } from './shared/data-storage.service';

import { VolumesComponent } from './volumes/volumes.component';
import { VolumesListComponent } from './volumes/volumes-list/volumes-list.component';
import { VolumeStructureComponent } from './volumes/volume-structure/volume-structure.component';
import { VolumeStructureBranchComponent } from './volumes/volume-structure/volume-structure-branch/volume-structure-branch.component';
import { VolumeStructureDirectoryComponent } from './volumes/volume-structure/volume-structure-directory/volume-structure-directory.component';
import { VolumeStructureFileComponent } from './volumes/volume-structure/volume-structure-file/volume-structure-file.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    VolumesComponent,
    VolumesListComponent,
    VolumeStructureComponent,
    VolumeStructureBranchComponent,
    VolumeStructureDirectoryComponent,
    VolumeStructureFileComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
