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
    dialogRef.componentInstance.position = data.position;
    dialogRef.componentInstance.picture = data.activePicture;
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.6s ease-in';
    this.galleryNextImage.subscribe(() => {
      dialogRef.componentInstance.position = dialogRef.componentInstance.position + 1 ;
      if (this.dataService.getAllImages()[dialogRef.componentInstance.position] !== undefined) {
        this.resetTransform(dialogRef);
        dialogRef.componentInstance.picture = this.dataService.getAllImages()[dialogRef.componentInstance.position];
      }
      console.log(dialogRef.componentInstance.position);
    });
    this.galleryPrevImage.subscribe(() => {
      dialogRef.componentInstance.position = dialogRef.componentInstance.position - 1 ;
      if (this.dataService.getAllImages()[dialogRef.componentInstance.position] !== undefined) {
        this.resetTransform(dialogRef);
        dialogRef.componentInstance.picture = this.dataService.getAllImages()[dialogRef.componentInstance.position];
      }
      console.log(dialogRef.componentInstance.position);
    });
    this.galleryTransform.subscribe((operation: string) => {
    if (operation === 'zoom-in') {
      dialogRef.componentInstance.zoomLevel = dialogRef.componentInstance.zoomLevel + 0.1;
    } else if (operation === 'zoom-out') {
      if (dialogRef.componentInstance.zoomLevel > 1) {
        dialogRef.componentInstance.zoomLevel = dialogRef.componentInstance.zoomLevel - 0.1;
      }
    } else if (operation === 'rotate') {
      dialogRef.componentInstance.rotateDeg = dialogRef.componentInstance.rotateDeg + 90;
    }
    dialogRef.componentInstance.changeValue();
    console.log(dialogRef.componentInstance.elRef.nativeElement.offsetParent);

    if (dialogRef.componentInstance.initClick) {
      // console.log(dialogRef.componentInstance.elRef.nativeElement.offsetParent.getElementsByClassName('cdk-overlay-pane')[0]);
      dialogRef.componentInstance.elRef.nativeElement.offsetParent.getElementsByClassName('cdk-overlay-pane')[0].style.transform = dialogRef.componentInstance.newValue;
      dialogRef.componentInstance.initClick = false;
    } else {
      dialogRef.componentInstance.elRef.nativeElement.offsetParent.style.transform = dialogRef.componentInstance.newValue;
    }
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'all 0.6s ease-in';
    });
    dialogRef.afterClosed().subscribe(() => {
      this.galleryMode.next(false);
    });
  }
  resetTransform(dialogRef) {
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.style.transition = 'none';
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.lastElementChild.style.transition = 'none';
    dialogRef.componentInstance.zoomLevel = 1;
    dialogRef.componentInstance.rotateDeg = 0;
    dialogRef.componentInstance.newValue = 'scale(1) rotateZ(0deg)';
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.style.transform = dialogRef.componentInstance.newValue;
    dialogRef.componentInstance.elRef.nativeElement.offsetParent.style.transition = 'all 0.6s ease-in';
    // console.log(dialogRef.componentInstance);
  }
}
