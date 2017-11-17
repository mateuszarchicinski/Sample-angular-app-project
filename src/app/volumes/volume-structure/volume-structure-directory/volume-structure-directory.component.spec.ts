import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeStructureDirectoryComponent } from './volume-structure-directory.component';

describe('VolumeStructureDirectoryComponent', () => {
  let component: VolumeStructureDirectoryComponent;
  let fixture: ComponentFixture<VolumeStructureDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeStructureDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeStructureDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
