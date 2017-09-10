import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryControlComponent } from './gallery-control.component';

describe('GalleryControlComponent', () => {
  let component: GalleryControlComponent;
  let fixture: ComponentFixture<GalleryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
