import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
@NgModule({
  declarations: [AppComponent, CardComponent, LandingPageComponent, MainAsideComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
