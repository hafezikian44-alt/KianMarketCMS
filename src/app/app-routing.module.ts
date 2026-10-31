import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './modules/users/users-layout/users-layout.component';
import { ProductsLayoutComponent } from './modules/products/products-layout/products-layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'users', component: UsersLayoutComponent },
  { path: 'products', component: ProductsLayoutComponent },
  { path: 'dashboard', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
