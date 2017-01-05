import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

import { AppComponent } from '../app.component';

@Component({
  selector: 'real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})

export class RealEstateComponent {
  title = 'RealeEstate works!';
  public image =  "/assets/img/real-estate/aerial-photo.jpg" ;

  constructor () {}
}