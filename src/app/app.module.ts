import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PartialsModule} from "./views/partials/partials.module";
import {PagesModule} from "./views/pages/pages.module";
import {HttpResponseInterceptor} from "./core/services/http-response-interceptor.service";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './state/lead/reducers/lead.reducer';
import {LeadEffects} from './state/lead/effects/lead.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PartialsModule,
    PagesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LeadEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
