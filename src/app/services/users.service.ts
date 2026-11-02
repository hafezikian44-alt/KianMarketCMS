import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsersResponseDto } from '../dtos/users.dto';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);

  constructor() {}
  getUsers() {
    return this.http.get<IUsersResponseDto>('https://dummyjson.com/users');
  }
}
