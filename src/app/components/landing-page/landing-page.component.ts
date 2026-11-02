import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { IUserDto } from 'src/app/dtos/users.dto';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  productsService = inject(ProductsService);
  usersService = inject(UsersService);

  products?: IProductDto[] | null;
  userList?: IUserDto[] | null;
  allUsers?: IUserDto[] | null;

  productName?: string | null;
  productId?: number | null;
  isModalOpen: boolean = false;

  ngOnInit() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response.products;
    });

    this.usersService.getUsers().subscribe((response) => {
      this.allUsers = response.users;
      this.userList = response.users.slice(-5);
    });
  }
  // @Output()
  // onDelProduct = new EventEmitter<number>();
  // this.onDelProduct.emit(productId);

  deleteProduct(product: IProductDto) {
    this.productName = product.title;
    this.productId = product.id;
    this.isModalOpen = true;
  }
}
