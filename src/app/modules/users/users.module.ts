import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersLayoutComponent } from './users-layout/users-layout.component';

@NgModule({
  declarations: [UsersLayoutComponent],
  imports: [CommonModule],
  exports: [UsersLayoutComponent],
})
export class UsersModule {}
