import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeStructureBranchComponent } from './volume-structure-branch.component';

describe('VolumeStructureBranchComponent', () => {
  let component: VolumeStructureBranchComponent;
  let fixture: ComponentFixture<VolumeStructureBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeStructureBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeStructureBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
