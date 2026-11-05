import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css'],
})
export class EditProductModalComponent {
  private productsService = inject(ProductsService);

  newTitle: string | null = '';
  newPrice: number | null = 0;
  productId?: number | null;

  @Input() openModal?: boolean | null;
  @Input() set confirmProduct(product: IProductDto | null | undefined) {
    if (product) {
      this.newTitle = product.title;
      this.newPrice = product.price;
      this.productId = product.id;
    }
  }

  @Output() closeEditModal = new EventEmitter<void>();
  onCloseModal() {
    this.closeEditModal.emit();
  }

  onSubmitEdit() {
    if (this.newTitle && this.newPrice && this.productId) {
      this.productsService
        .editProduct(this.newTitle, this.newPrice, this.productId)
        .subscribe({
          next: (response) => {
            console.log('Product is chenged:', response);
            this.closeEditModal.emit();
          },
          error: (err) => {
            console.error('Product is not changed! :', err);
            this.closeEditModal.emit();
          },
        });
    } else {
      console.error('محصولی دریافت نشد!');
    }
  }
}
