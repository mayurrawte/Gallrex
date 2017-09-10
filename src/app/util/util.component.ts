import {Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, TemplateRef, ViewChild} from '@angular/core';
import {UtilService} from '../util.service';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {
  constructor(public elRef: ElementRef, public renderer: Renderer2) { }
  pictureViewMode;
  picture;
  zoomLevel = 1;
  rotateDeg = 0;
  newValue = 'scale(1) rotateZ(0deg)';
  ngOnInit() {
  }
  changeValue() {
    this.newValue = 'scale(' + this.zoomLevel + ') ' + 'rotateZ(' + this.rotateDeg + 'deg)';
  }

}
