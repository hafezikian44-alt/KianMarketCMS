import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsLayoutComponent } from './products-layout/products-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsLayoutComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsLayoutComponent],
})
export class ProductsModule {}
