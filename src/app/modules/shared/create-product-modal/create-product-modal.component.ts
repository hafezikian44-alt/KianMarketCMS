import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ICreateProductDto, IProductDto } from 'src/app/dtos/products.dto';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.css'],
})
export class CreateProductModalComponent {
  private productService = inject(ProductsService);
  newProduct: ICreateProductDto = {
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: '',
    thumbnail: '',
    images: [],
  };
  imageUrl?: string | null;

  doWeHaveImg: boolean = false;

  @Input() openModal?: boolean | null;
  @Output() closeCreateProductModal = new EventEmitter<void>();
  onCloseCreateProductModal() {
    this.closeCreateProductModal.emit();
  }

  onAddImage() {
    if (this.imageUrl) {
      const exist = this.newProduct.images?.includes(this.imageUrl);
      if (!exist) {
        this.newProduct.images?.push(this.imageUrl.trim());
      }
    }
    if (this.newProduct.images?.length === 0) {
      this.doWeHaveImg = false;
    } else {
      this.doWeHaveImg = true;
    }
  }
  onSubmitAdd() {
    this.productService.createProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log('new product is created:', response);
        this.closeCreateProductModal.emit();
      },
      error: (err) => {
        console.error('new product is not created:', err);
        this.closeCreateProductModal.emit();
      },
    });
  }
}
