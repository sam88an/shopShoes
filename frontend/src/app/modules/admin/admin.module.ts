import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, HttpClientModule, SharedModule],
})
export class AdminModule {}
