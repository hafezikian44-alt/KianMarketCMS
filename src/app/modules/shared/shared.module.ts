import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmModalComponent, EditProductModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConfirmModalComponent, EditProductModalComponent],
})
export class SharedModule {}
