import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { FormsModule } from '@angular/forms';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    EditProductModalComponent,
    CreateProductModalComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ConfirmModalComponent,
    EditProductModalComponent,
    CreateProductModalComponent,
  ],
})
export class SharedModule {}
