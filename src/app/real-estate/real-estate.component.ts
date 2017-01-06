import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { AppComponent } from '../app.component';

@Component({
  selector: 'real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})

export class RealEstateComponent {
  title = 'RealeEstate works!';
  public currentImage = 0;
  public currentImagePath = images[this.currentImage].location;
  public currentImageType = images[this.currentImage].type;
  public passSecurityForEmbeded;
  public isSrcImage = 'srcIsImage';
  public isSrcVideo = 'srcIsNotVideo';
  imageHeight;
  imageWidth;

  constructor(private domSanitizer: DomSanitizer) {
  }

  nextImage() {
    this.imageHeight = document.getElementById('image').clientHeight;
    this.imageWidth = document.getElementById('image').clientWidth;
    this.currentImage++;
    this.currentImagePath = images[this.currentImage].location;
    this.currentImageType = images[this.currentImage].type;

    if (this.currentImageType === 'image') {
      this.isSrcImage = 'srcIsImage';
      this.isSrcVideo = 'srcIsNotVideo';
    } else {
      this.isSrcVideo = 'srcIsVideo';
      this.isSrcImage = 'srcIsNotImage';
      this.passSecurityForEmbeded = this.domSanitizer.bypassSecurityTrustResourceUrl(this.currentImagePath);
    }
  }

  previousImage() {
    this.imageHeight = document.getElementById('image').clientHeight;
    this.imageWidth = document.getElementById('image').clientWidth;
    this.currentImage--;
    this.currentImagePath = images[this.currentImage].location;
    this.currentImageType = images[this.currentImage].type;

    if (this.currentImageType === 'image') {
      this.isSrcImage = 'srcIsImage';
      this.isSrcVideo = 'srcIsNotVideo';
    } else {
      this.isSrcVideo = 'srcIsVideo';
      this.isSrcImage = 'srcIsNotImage';
      this.passSecurityForEmbeded = this.domSanitizer.bypassSecurityTrustResourceUrl(this.currentImagePath);
    }
  }
}

var images = [
  {
    index: 0,
    location: '/assets/img/real-estate/aerial-photo.jpg',
    type: 'image'
  },
  {
    index: 1,
    location: 'https://www.youtube.com/embed/VG8Edeh2pl4',
    type: 'video'
  }
]