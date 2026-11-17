import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsLayoutComponent } from './products-layout/products-layout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [ProductsLayoutComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [ProductsLayoutComponent],
})
export class ProductsModule {}
