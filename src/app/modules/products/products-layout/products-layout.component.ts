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
  ngOnInit() {
    this.productsSerevice.getProducts().subscribe((response) => {
      this.products = response.products;
    });
  }
}
