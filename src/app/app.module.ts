import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeFooterComponent } from './home/home-footer/home-footer.component';
// import { VNavbarComponent } from './home/home-header/v-navbar/v-navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
// import { HomeModule } from './home/home.module';
// import { HeroSvgComponent } from './home/hero-svg/hero-svg.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    ClientsComponent,
    ProductsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
