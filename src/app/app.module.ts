import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PartialsModule} from "./views/partials/partials.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
