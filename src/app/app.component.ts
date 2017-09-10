import {Component, OnInit} from '@angular/core';
import {UtilService} from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  galleryMode = false;
  constructor(private utilService: UtilService) {}
  ngOnInit() {
    this.utilService.galleryMode.subscribe((value: boolean) => {
      this.galleryMode = value;
      console.log(this.galleryMode);
    });
  }
}
