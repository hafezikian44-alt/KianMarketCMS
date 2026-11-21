import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICategoryDto } from 'src/app/dtos/products.dto';
import { categoriesDb } from 'src/app/Db/category.db';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-main-aside',
  templateUrl: './main-aside.component.html',
  styleUrls: ['./main-aside.component.css'],
})
export class MainAsideComponent {
  productsService = inject(ProductsService);
  categories: ICategoryDto[] = categoriesDb;

  onCategory(slug: string) {
    this.productsService.getProductSlug(slug);
  }
}
