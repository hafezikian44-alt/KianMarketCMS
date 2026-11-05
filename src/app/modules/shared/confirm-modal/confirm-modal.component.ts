import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  private productService = inject(ProductsService);

  @Input() confirmProduct?: IProductDto | null;
  @Input() openModal?: boolean | null;

  @Output() closeDeleteModal = new EventEmitter<void>();
  onCloseDeleteModal() {
    this.closeDeleteModal.emit();
  }

  onDeleteProduct() {
    if (this.confirmProduct) {
      this.productService.deleteProduct(this.confirmProduct).subscribe({
        next: (response) => {
          console.log('product is deleted:', response);
          this.closeDeleteModal.emit();
        },
        error: (err) => {
          console.error('deleting failed:', err);
          this.closeDeleteModal.emit();
        },
      });
    }
  }
}
