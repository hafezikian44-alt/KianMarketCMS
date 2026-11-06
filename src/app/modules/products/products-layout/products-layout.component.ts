import { Component, inject, OnInit } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.css'],
})
export class ProductsLayoutComponent implements OnInit {
  productsSerevice = inject(ProductsService);

  products?: IProductDto[] | null;
  confirmEditProduct?: IProductDto | null;
  currentDelProduct?: IProductDto | null;
  isDeleteModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isCreateModalOpen: boolean = false;
  ngOnInit() {
    this.productsSerevice.getProducts().subscribe((response) => {
      this.products = response.products;
    });
  }

  onCloseEditModal() {
    this.isEditModalOpen = false;
    console.log(this.products);
  }
  onEditProduct(product: IProductDto) {
    this.confirmEditProduct = product;
    this.isEditModalOpen = true;
  }
  onCloseDeleteModal() {
    this.isDeleteModalOpen = false;
    console.log(this.products);
  }
  onDeleteProduct(product: IProductDto) {
    this.currentDelProduct = product;
    this.isDeleteModalOpen = true;
  }

  onCreateProduct() {
    this.isCreateModalOpen = true;
    console.log('on create product');
  }
  onCloseCreateProductModal() {
    this.isCreateModalOpen = false;
  }
}
