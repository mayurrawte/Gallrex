import { Component, OnInit } from '@angular/core';
import {UtilService} from '../util.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(private utilService: UtilService, private dataService: DataService) { }
  allImages = [];
  ngOnInit() {
    this.allImages = this.dataService.getAllImages();
    for (const i of this.allImages) {
      i['loaded'] = false;
      // console.log(i);
    }
    console.log(this.allImages);
  }
  openImage(picture: {'name': '', 'location': ''}, i: number) {
    const data = {'activePicture': picture, position: i};
    this.utilService.pictureView(data);
  }
  load(i) {
    this.allImages[i].loaded = true;
  }
}
