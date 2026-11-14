import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { IProductDto } from 'src/app/dtos/products.dto';
import { IUserDto } from 'src/app/dtos/users.dto';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductsModule } from 'src/app/modules/products/products.module';
import { ProductsLayoutComponent } from 'src/app/modules/products/products-layout/products-layout.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  productsService = inject(ProductsService);
  usersService = inject(UsersService);

  userList?: IUserDto[] | null;
  allUsers?: IUserDto[] | null;

  ngOnInit() {
    this.usersService.getUsers().subscribe((response) => {
      this.allUsers = response.users;
      this.userList = response.users.slice(-5);
    });
  }
  @ViewChild(ProductsLayoutComponent)
  productLayout?: ProductsLayoutComponent;
}
