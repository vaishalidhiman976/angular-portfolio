import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppModule } from '../app.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
// import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { RouterModule } from '@angular/router';
import { VNavbarComponent } from './home-header/v-navbar/v-navbar.component';
import { HeroSvgComponent } from './hero-svg/hero-svg.component';
import SimpleParallax from 'simple-parallax-js';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeComponent } from './home.component';
import { ProgressBarModule } from 'angular-progress-bar';
@NgModule({
  declarations: [
    // NgbModalBackdrop,
    // NgbOffcanvas,
    HomeComponent,
    HomeHeaderComponent,
    VNavbarComponent,
    HomeFooterComponent,
    VNavbarComponent,
    HeroSvgComponent,
  ],
  imports: [
    CommonModule,
    // AppModule,
    NgbModule,
    RouterModule,
    ProgressBarModule
    // SimpleParallax,
  ],
  exports:[
    HomeComponent,
    HomeHeaderComponent,
    VNavbarComponent,
    HomeFooterComponent,
    VNavbarComponent,
    HeroSvgComponent
  ]
})
export class HomeModule { }
