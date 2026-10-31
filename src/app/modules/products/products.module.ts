import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsLayoutComponent } from './products-layout/products-layout.component';

@NgModule({
  declarations: [ProductsLayoutComponent],
  imports: [CommonModule],
  exports: [ProductsLayoutComponent],
})
export class ProductsModule {}
