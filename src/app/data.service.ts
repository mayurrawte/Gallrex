import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  data = [
    {'id': 1, 'name': 'Peaceful Beach', 'location': '../assets/galleryImage/1.jpg'},
    {'id': 2, 'name': 'Green island', 'location': '../assets/galleryImage/2.jpg'},
    {'id': 3, 'name': 'Trees', 'location': '../assets/galleryImage/3.jpg'},
    {'id': 4, 'name': 'Beautiful Beach', 'location': '../assets/galleryImage/4.jpg'},
    {'id': 5, 'name': 'Another Green island', 'location': '../assets/galleryImage/5.jpg'},
    {'id': 6, 'name': 'Another Green island', 'location': '../assets/galleryImage/6.jpg'},
    {'id': 7, 'name': 'Another Green island', 'location': '../assets/galleryImage/7.jpg'},
    {'id': 8, 'name': 'Another Green island', 'location': '../assets/galleryImage/8.jpg'},
    {'id': 9, 'name': 'Another Green island', 'location': '../assets/galleryImage/9.jpg'},
  ];
  getAllImages() {
    return this.data;
  }
}
