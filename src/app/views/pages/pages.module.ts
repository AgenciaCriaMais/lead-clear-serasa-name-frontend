import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule} from "@angular/router";
import {PartialsModule} from "../partials/partials.module";
import {DashbordComponent} from './dashbord/dashbord.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashbordComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule
  ]
})
export class PagesModule {
}
