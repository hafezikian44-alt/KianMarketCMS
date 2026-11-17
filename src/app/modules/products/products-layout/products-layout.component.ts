import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { IProductDto } from 'src/app/dtos/products.dto';
import { ProductsService } from 'src/app/services/products.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.css'],
})
export class ProductsLayoutComponent implements OnInit {
  productsSerevice = inject(ProductsService);

  products: IProductDto[] = [];
  confirmEditProduct?: IProductDto | null;
  currentDelProduct?: IProductDto | null;
  isDeleteModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isCreateModalOpen: boolean = false;

  currentPage: number = 1;
  limit: number = 6;
  totalProducts: number = 0;
  visiblePage: number = 5;

  searchValue: string = '';
  searchMood: boolean = false;

  ngOnInit() {
    this.productsSerevice
      .getProducts(this.currentPage, this.limit)
      .subscribe((response) => {
        this.products = response.products;
        this.totalProducts = response.total;
      });
  }

  get pagination(): number[] {
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(this.visiblePage / 2),
    );
    let endPage = Math.min(this.totalPages, startPage + this.visiblePage - 1);
    startPage = Math.max(1, endPage - this.visiblePage + 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index,
    );
  }

  get totalPages(): number {
    if (this.totalProducts <= 0 || this.limit <= 0) return 0;
    return Math.ceil(this.totalProducts / this.limit);
  }
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onChangePage(page: number): void {
    if (page <= 0 || page > this.totalPages) return;
    this.currentPage = page;
    this.productsSerevice.getProducts(page, this.limit).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalProducts = response.total;
      },
      error: (err) => console.error('can not get products:', err),
    });
  }

  previousPage() {
    if (this.currentPage < 2) return;
    this.currentPage = this.currentPage - 1;
    this.onChangePage(this.currentPage);
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.onChangePage(this.currentPage);
  }

  onCloseEditModal() {
    this.isEditModalOpen = false;
    console.log(this.totalProducts);
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

  searchRequest(event: any) {
    this.searchMood = true;
    this.productsSerevice
      .searchProduct(this.searchValue)
      .pipe(debounceTime(5000))
      .subscribe({
        next: (response) => {
          console.log('search opration was successful:', response.products);
          this.products = response.products;
        },
        error: (err) => console.log('search opration was not successful:', err),
      });
    if (this.searchValue === '') {
      this.searchMood = false;
      this.ngOnInit();
    }
  }
}
