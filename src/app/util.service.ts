import {Injectable, Renderer2, RendererStyleFlags2} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {UtilComponent} from './util/util.component';
import {Subject} from 'rxjs/Subject';
import {DataService} from './data.service';

@Injectable()
export class UtilService {
  constructor(public dialog: MdDialog, private dataService: DataService) { }
  galleryMode = new Subject();
  galleryTransform = new Subject();
  galleryNextImage = new Subject();
  galleryPrevImage = new Subject();
  position = 1;
  public cancelView() {
    this.dialog.closeAll();
  }
  public pictureView(data) {
    this.galleryMode.next(true);
    let dialogRef: MdDialogRef<UtilComponent>;
    dialogRef = this.dialog.open(UtilComponent);
    // console.log(dialogRef.componentInstance.elRef);
    // console.log(dialogRef.componentInstance.elRef.nativeElement.offsetParent);
    dialogRef.componentInstance.pictureViewMode = true;
    this.position = data.position;
    dialogRef.componentInstance.picture = data.activePicture;
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.6s ease-in';
    this.galleryNextImage.subscribe(() => {
      this.position = this.position + 1 ;
      if (this.dataService.getAllImages()[this.position] !== undefined) {
        this.resetTransform(dialogRef);
        dialogRef.componentInstance.picture = this.dataService.getAllImages()[this.position];
      }
    });
    this.galleryPrevImage.subscribe(() => {
      this.position = this.position - 1 ;
      if (this.dataService.getAllImages()[this.position] !== undefined) {
        this.resetTransform(dialogRef);
        dialogRef.componentInstance.picture = this.dataService.getAllImages()[this.position];
      }
    });
    this.galleryTransform.subscribe((operation: string) => {
    if (operation === 'zoom-in') {
      dialogRef.componentInstance.zoomLevel = dialogRef.componentInstance.zoomLevel + 0.1;
    } else if (operation === 'zoom-out') {
      dialogRef.componentInstance.zoomLevel = dialogRef.componentInstance.zoomLevel - 0.1;
    } else if (operation === 'rotate') {
      dialogRef.componentInstance.rotateDeg = dialogRef.componentInstance.rotateDeg + 90;
    }
    dialogRef.componentInstance.changeValue();
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transform = dialogRef.componentInstance.newValue;
      dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.6s ease-in';
    });
    dialogRef.afterClosed().subscribe(() => {
      this.galleryMode.next(false);
    });
    console.log(dialogRef.componentInstance);
  }
  resetTransform(dialogRef) {
    dialogRef.componentInstance.zoomLevel = 1;
    dialogRef.componentInstance.rotateDeg = 0;
    dialogRef.componentInstance.newValue = 'scale(1) rotateZ(0deg)';
    // console.log(dialogRef.componentInstance);
  }
}
