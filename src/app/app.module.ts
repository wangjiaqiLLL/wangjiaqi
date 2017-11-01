import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularEchartsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    LoginComponent,
    MapComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

