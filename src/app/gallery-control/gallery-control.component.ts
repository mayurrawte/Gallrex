import { Component, OnInit } from '@angular/core';
import {UtilService} from '../util.service';

@Component({
  selector: 'app-gallery-control',
  templateUrl: './gallery-control.component.html',
  styleUrls: ['./gallery-control.component.css']
})
export class GalleryControlComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit() {
  }
  onZoomIn() {
    this.utilService.galleryTransform.next('zoom-in');
  }
  onZoomOut() {
    this.utilService.galleryTransform.next('zoom-out');
  }
  onRotate() {
    this.utilService.galleryTransform.next('rotate');
  }
  onCancel() {
    this.utilService.cancelView();
  }
  onNext() {
    this.utilService.galleryNextImage.next();
  }
  onPrev() {
    this.utilService.galleryPrevImage.next();
  }
}
