import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductDto, IProductsResponseDto } from '../dtos/products.dto';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  constructor() {}

  getProducts() {
    return this.http.get<IProductsResponseDto>(
      'https://dummyjson.com/products',
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
}
