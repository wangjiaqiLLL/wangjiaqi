import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { LoginComponent } from './login.component';
import { MapComponent } from './map/map.component';
const routes: Routes = [
  { path: '', redirectTo: '/app-dashboard', pathMatch: 'full' },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-detail/:id', component: HeroDetailComponent },
  { path: 'app-heroes', component: HeroesComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
