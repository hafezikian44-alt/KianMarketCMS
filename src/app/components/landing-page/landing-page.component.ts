import { Component, inject, OnInit } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  productsService = inject(ProductsService);

  products?: IProductDto[] | null;
  ngOnInit() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response.products;
    });
  }
}
