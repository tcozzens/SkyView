import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { RealEstateModule } from '../real-estate/real-estate.module';

@NgModule({
  declarations: [
    HomeComponent,
    RealEstateComponent
  ],
  imports: [
    RealEstateModule
  ],
  exports: [
  ],
  providers: [],
})
export class HomeModule { }
