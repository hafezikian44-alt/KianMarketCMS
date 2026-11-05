import { Component, inject, OnInit } from '@angular/core';
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

  currentDelProduct?: IProductDto | null;
  isDeleteModalOpen: boolean = false;

  confirmEditProduct?: IProductDto | null;
  isEditModalOpen: boolean = false;

  ngOnInit() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response.products;
    });

    this.usersService.getUsers().subscribe((response) => {
      this.allUsers = response.users;
      this.userList = response.users.slice(-5);
    });
  }

  onDeleteProduct(product: IProductDto) {
    this.currentDelProduct = product;
    this.isDeleteModalOpen = true;
    this.currentDelProduct = product;
    this.isDeleteModalOpen = true;
  }
  onCloseDeleteModal() {
    this.isDeleteModalOpen = false;
    console.log(this.products);
  }

  onEditProduct(product: IProductDto) {
    this.confirmEditProduct = product;
    this.isEditModalOpen = true;
  }
  onCloseEditModal() {
    this.isEditModalOpen = false;
    console.log(this.products);
  }
}
