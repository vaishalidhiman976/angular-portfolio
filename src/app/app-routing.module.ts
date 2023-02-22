import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutMeComponent},
  {path:'clients', component: ClientsComponent},
  {path:'products', component:ProductsComponent},
  {path: '**', component: PageNotFoundComponent}  // '**' double astrik in this called as vilcat
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
