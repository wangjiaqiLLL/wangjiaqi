import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './map.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularEchartsModule
  ],
  declarations: [
    MapComponent
  ],
  providers: [],
  bootstrap: [MapComponent]
})
export class MapModule { }
