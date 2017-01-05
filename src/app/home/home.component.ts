import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

import { AppComponent } from '../app.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Home works!';
  topPadding = 'paddingTop50';
  originalScroll = window.scrollY;

  constructor (private appComponent: AppComponent) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY <= 50){
      this.originalScroll = window.scrollY;
      console.log("TOP");
      this.topPadding = 'paddingTop50';
    } 
    if (window.scrollY > 50 && this.originalScroll > window.scrollY){
      this.originalScroll = window.scrollY;
      this.appComponent.navbarMove = 'fixed';    
      this.appComponent.scrollHintMove = 'arrow-wrap';    
      this.topPadding = 'paddingTop50';
      console.log("SCROLLED UP: ");
    }
    else if (window.scrollY > 50 && this.originalScroll < window.scrollY){
      this.originalScroll = window.scrollY;
      this.appComponent.navbarMove = 'nav-up';
      this.appComponent.scrollHintMove = 'nav-up';
      this.topPadding = 'paddingTop0';
      console.log("SCROLLED DOWN: ");
    }
  }
}
