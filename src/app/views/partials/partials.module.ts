import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {FormLeadComponent} from './form-lead/form-lead.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BannerComponent} from './banner/banner.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    FormLeadComponent,
    BannerComponent,
    AboutMeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    FormLeadComponent,
    BannerComponent,
    AboutMeComponent,
    HeaderComponent
  ]
})
export class PartialsModule {
}
