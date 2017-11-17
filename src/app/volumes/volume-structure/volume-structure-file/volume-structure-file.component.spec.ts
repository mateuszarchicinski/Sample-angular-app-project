import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeStructureFileComponent } from './volume-structure-file.component';

describe('VolumeStructureFileComponent', () => {
  let component: VolumeStructureFileComponent;
  let fixture: ComponentFixture<VolumeStructureFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeStructureFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeStructureFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
