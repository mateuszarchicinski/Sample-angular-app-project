import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolumesComponent } from './volumes/volumes.component';
import { VolumesListComponent } from './volumes/volumes-list/volumes-list.component';
import { VolumeStructureComponent } from './volumes/volume-structure/volume-structure.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    VolumesComponent,
    VolumesListComponent,
    VolumeStructureComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
