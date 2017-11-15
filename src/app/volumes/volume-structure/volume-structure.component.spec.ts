import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeStructureComponent } from './volume-structure.component';

describe('VolumeStructureComponent', () => {
  let component: VolumeStructureComponent;
  let fixture: ComponentFixture<VolumeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
