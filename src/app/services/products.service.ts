import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ICreateProductDto,
  IProductDto,
  IProductsResponseDto,
} from '../dtos/products.dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  categurySlug: string = '';

  constructor() {}

  getProducts(page: number, limit: number) {
    const skip: number = (page - 1) * limit;
    return this.http.get<IProductsResponseDto>(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
  }
  deleteProduct(product: IProductDto) {
    return this.http.delete(`https://dummyjson.com/products/${product.id}/`);
  }
  editProduct(title: string, price: number, id: number) {
    console.log(`محصول با شناسه ${id} تغییر کرد !`);

    return this.http.put(`https://dummyjson.com/products/${id}`, {
      title: title,
      price: price,
    });
  }
  createProduct(product: ICreateProductDto) {
    console.log('createProduct is called !');

    return this.http.post('https://dummyjson.com/products/add', product);
  }

  searchProduct(query: string) {
    console.log('search products is called !');

    return this.http.get<IProductsResponseDto>(
      `https://dummyjson.com/products/search?q=${query}`,
    );
  }

  getProductSlug(slug: string) {
    this.categurySlug = slug;
    console.log(this.categurySlug);
  }
  getProductsByCategory(slug: string) {
    return this.http.get(`https://dummyjson.com/products/category/${slug}`);
  }
}
