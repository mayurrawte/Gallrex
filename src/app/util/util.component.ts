import {Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, TemplateRef, ViewChild} from '@angular/core';
import {UtilService} from '../util.service';
import {DataService} from "../data.service";

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {
  constructor(public elRef: ElementRef, public renderer: Renderer2, private dataService: DataService) { }
  pictureViewMode;
  picture;
  zoomLevel = 1;
  rotateDeg = 0;
  newValue = 'scale(1) rotateZ(0deg)';
  position = 1;
  initClick = true;
  ngOnInit() {
  }
  changeValue() {
    this.newValue = 'scale(' + this.zoomLevel + ') ' + 'rotateZ(' + this.rotateDeg + 'deg)';
  }
  onSwipeNext() {
    this.position = this.position + 1 ;
    if (this.dataService.getAllImages()[this.position] !== undefined) {
      this.resetTransform();
      this.picture = this.dataService.getAllImages()[this.position];
    }
  }
  onSwipePrev() {
    this.position = this.position - 1 ;
    if (this.dataService.getAllImages()[this.position] !== undefined) {
      this.resetTransform();
      this.picture = this.dataService.getAllImages()[this.position];
    }
  }
  onPinchIn(data) {
    console.log(this.zoomLevel);
    if (this.zoomLevel - data.scale > 0.3 ) {
      this.zoomLevel = this.zoomLevel - data.scale;
    }
    // console.log(data.scale);
    this.changeValue();
    this.localChangeValue();
    this.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.2s ease-in';
    // this.elRef.nativeElement.offsetParent.style.transform = this.newValue;
    console.log(this.elRef.nativeElement.offsetParent.nativeElement);
  }
  onPinchOut(data) {
    console.log(this.zoomLevel);
      this.zoomLevel = this.zoomLevel + data.scale;
     this.changeValue();
    this.localChangeValue();
    // console.log(data.scale);
    // this.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.6s ease-in';
    // this.elRef.nativeElement.offsetParent.style.transform = this.newValue;
    console.log(this.elRef);
  }
  localChangeValue() {
    this.changeValue();
    if (this.initClick) {
      this.elRef.nativeElement.offsetParent.getElementsByClassName('cdk-overlay-pane')[0].style.transform = this.newValue;
      this.initClick = false;
    } else {
      this.elRef.nativeElement.offsetParent.style.transform = this.newValue;
    }
  }
  resetTransform() {
    this.elRef.nativeElement.offsetParent.style.transition = 'none';
    this.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'none';
    this.zoomLevel = 1;
    this.rotateDeg = 0;
    this.newValue = 'scale(1) rotateZ(0deg)';
    this.elRef.nativeElement.offsetParent.style.transform = this.newValue;
    this.elRef.nativeElement.offsetParent.style.transition = 'all 0.2s ease-in';
    // console.log(dialogRef.componentInstance);
  }

}
