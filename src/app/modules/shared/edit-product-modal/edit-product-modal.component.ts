import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css'],
})
export class EditProductModalComponent {
  newTitle?: string;
  newPrice?: number;

  @Input() confirmProduct?: IProductDto | null;
  @Input() openModal?: boolean | null;

  @Output() closeEditModal = new EventEmitter<void>();
  onCloseModal() {
    this.closeEditModal.emit();
  }
}
