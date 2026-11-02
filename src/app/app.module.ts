import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, MainAsideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ProductsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    NgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
