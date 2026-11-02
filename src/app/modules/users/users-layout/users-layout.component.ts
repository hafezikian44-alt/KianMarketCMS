import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUserDto } from 'src/app/dtos/users.dto';
@Component({
  selector: 'app-users-layout',
  templateUrl: './users-layout.component.html',
  styleUrls: ['./users-layout.component.css'],
})
export class UsersLayoutComponent implements OnInit {
  usersService = inject(UsersService);
  usersList?: IUserDto[] | null;
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.usersList = response.users;
    });
  }
}
